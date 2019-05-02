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
     
      console.log(`Item ID  ` + `Product Name   ` + ` Department Name ` + ` Price ` + ` Stock Quantity`);
        for (var i = 0; i < res.length; i++) {      
      
    //   itemIDArray.push(res[i].item_id);
      console.log(res[i].item_id + `      ` + res[i].product_name + `     ` + res[i].department_name + `      ` + res[i].price + `      ` + res[i].stock_quantity);

    }
    
    // connection.end();
    // inquirerFunction();

  });
}

