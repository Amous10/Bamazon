var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // run the start function after the connection is made to prompt the user
  searchProducts();
});

var itemIDArray = [];


function searchProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
     
      // console.log(`Item ID  ` + `Product Name   ` + ` Department Name ` + ` Price ` + ` Stock Quantity`);
      console.log('*RESPONSE FROM DB*: ', res);
      console.log(`ID | Product Name     | Department  | Price | Stock 
____________________________________________________
                                                    `);
        for (var i = 0; i < res.length; i++) {      
      
      itemIDArray.push(res[i].id);
      // console.log(res[i].item_id + `      ` + res[i].product_name + `     ` + res[i].department_name + `      ` + res[i].price + `      ` + res[i].stock_quantity);
      console.log(`${res[i].
        id} | ${res[i].product_name}    | ${res[i].department_name}       | ${res[i].price}   | ${res[i].stock_quantity}  `)
       
    }
    console.log(itemIDArray)
    // connection.end();
    inquirerFunction();

  });
}

function inquirerFunction() {

  inquirer
    .prompt([
      {
        message: "What item would you like to purchase?",
        type: "input",
        name: "ID",
        validate: function (value) {
         var item = parseInt(value);
          if (itemIDArray.includes(item)){
          
            return true;
          }
            return false;
        }

      },
      {
        message: "How many would you like to purchase?",
        type: "input",
        name: "stock",
        validate: function (value) {
          if (isNaN(value) === false && parseInt(value)) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (inquirerResponse) {
      console.log(inquirerResponse);

      var selectedProduct = inquirerResponse.ID;
      var selectedStock = inquirerResponse.stock;

      console.log(selectedProduct, selectedStock);

      connection.query(`select * from products where id =${selectedProduct}`, (err, res) => {
        if (err) throw err;
                        
        if (res[0].stock_quantity > selectedStock) {

          var newStockQuantity = res[0].stock_quantity - selectedStock;
          var totalPrice = res[0].price * parseFloat(selectedStock);

          connection.query(`UPDATE products SET stock_quantity = ${newStockQuantity} where id = ${selectedProduct}`, (err, res) => {
            if (err) throw err;

            console.log(`Stock Quantity Updated! Thank you for your purchase!\n You're total price is $${totalPrice}`);
            confirmInquirerPrompt();
          })


        } else {

          console.log("Insufficient quantity! Returning to main page")
          inquirerFunction();
        }
      });


    });

}

function confirmInquirerPrompt() {
  inquirer
    .prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Would you like to buy another item?"
      }
    ])
    .then((answer) => {
      if (answer.confirm === true) {
        searchBamazon();

      } else {
        console.log("See you next time!")
        connection.end();
      }
    })
};
