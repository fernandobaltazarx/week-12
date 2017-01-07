var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "applecare",
  database: "store"
});
var makeTable = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) {
      throw err;
    }
    var tab = "\t";
    console.log("  Item   |   Name   |   Department   |   Price   |   Quantity  ");
    console.log("_________________________________________________________________");
    console.log("_________________________________________________________________");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + tab + res[i].product_name + tab + res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
    }
    console.log("_________________________________________________________________");
    console.log("_________________________________________________________________");
    promptManager(res);
  });
};

function addItem() {
  inquirer.prompt([{
    type: "input",
    name: "productName",
    message: "Product Name??"
  }, {
    type: "input",
    name: "department",
    message: "What Department?"
  }, {
    type: "input",
    name: "price",
    message: "Price?"
  }, {
    type: "input",
    name: "quantity",
    message: "Quantity?"
  }]).then(function(val) {
    connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('" + val.productName + "','" + val.department + "'," + val.price + "," + val.quantity + ");", function(err, res) {
      if (err) {
        throw err;
      }
      console.log("Successfuly added Product!");
      makeTable();
    });
  });
}

function addQuantity() {
  inquirer.prompt([{
    type: "input",
    name: "productName",
    message: "Which Product would you like to update?"
  }, {
    type: "input",
    name: "newQuantity",
    message: "How many more of these items do we have??"
  }]).then(function(val) {
    connection.query("UPDATE products SET stock_quantity = stock_quantity+" + val.newQuantity + " WHERE product_name='" + val.productName + "'", function(err, res) {
      if (err) {
        throw err;
      }
      if (res.affectedRows === 0) {
        console.log("That item does not exist.");
        makeTable();
      } else {
        console.log("Quantity increased for this item!");
        makeTable();
      }
    });
  });
}

function promptManager(res) {
  inquirer.prompt([{
    type: "rawlist",
    name: "choice",
    message: "What would you like to do?",
    choices: ["Add New Item", "Add Quantity to Existing Items"]
  }]).then(function(val) {
    if (val.choice === "Add New Item") {
      addItem();
    }
    if (val.choice === "Add Quantity to Existing Items") {
      addQuantity();
    }
  });
}
makeTable();