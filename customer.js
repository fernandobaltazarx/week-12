var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "applecare",
	database: "store"
});
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
	}
    console.log("			      _____________________________");
    console.log("                             /                             \\ ");
    console.log("                     ___/ /  | welcome to store      |");
    console.log("  \\                 |  /\\/   |we have great deals this evening! |");
    console.log("  \\\\                \\  o --/ \\ ____________________________/ ");
    console.log("   \\\\    /---\\------/\\   __)_/ /                              ");
    console.log("   \\ \\__/ '           `  _/ --/                                ");
    console.log("    \\     \\    '         |                         ");
    console.log("    \\______\\   \\   `     /");
    console.log("        /   \\   \\--/   / \\                                  ");
    console.log("        /  / |  |  |  |  |                                  ");
    console.log("        |  | |  |  |  |  |                                  ");
    console.log("        ---# --##  --## -#        ");
	makeTable();
});
var makeTable = function() {
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;
		var tab = "\t";
		console.log("  Item   |   Name   |   Department   |   Price   |   Quantity  ");
	    console.log("_________________________________________________________________");
	    console.log("_________________________________________________________________");
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].item_id + tab + res[i].product_name + tab + res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
		}
	    console.log("_________________________________________________________________");
	    console.log("_________________________________________________________________");
		promptCustomer(res);
	});
};
var promptCustomer = function(res) {
	inquirer.prompt([{
		type: "input",
		name: "choice",
		message: "What do you want? [Quit with Q]"
	}]).then(function(val) {
		var correct = false;
		for (var i = 0; i < res.length; i++) {
			if (res[i].product_name === val.choice) {
				var correct = true;
				var product = val.choice;
				var id = i;
				inquirer.prompt([{
					type: "input",
					name: "quant",
					message: "and how many of them?"
				}]).then(function(val) {
					if ((res[id].stock_quantity - val.quant) > 0) {
						connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - val.quant) + "' WHERE product_name='" + product + "'", function(err, res2) {
							if (err) {
								throw err;
							}
							console.log("Thank You for Your Purchase!");
							makeTable();
						});
					} else {
						console.log("Choose a Lower Quantity!");
						promptCustomer(res);
					}
				});
			}
			if (val.choice === "Q" || val.choice === "q") {
				process.exit();
			}
		}
		if (i === res.length && correct === false) {
			console.log("Try Again");
			promptCustomer(res);
		}
	});
};
