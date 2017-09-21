var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(error) {
    if (error) {
        throw error;
    };
    console.log("Sucessfully connected! ID: " + connection.threadId + "\n");
    showAll();
});

function showAll() {
    console.log("Showing All Products: \n")
    var query = connection.query("SELECT * FROM products", function(err, response) {
        if (err) {
            throw err;
        };
        for (var i = 0; i < response.length-1; i++) {
            console.log("Item ID: "+response[i].item_id+"\n    "+response[i].product_name+"\n    "+response[i].department_name+"\n    $"+response[i].price+"\n    Stock: "+response[i].stock_quantity);
        }
        startQuery();
    });
}

function startQuery() {
    inquirer.prompt ([{
        name: "itemId",
        type: "input",
        message: "Enter the ID number of the product you would like to buy: "
    }, {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy? "
    }]).then(function (answer) { 
        connection.query("SELECT * FROM products WHERE ?",  { item_id: answer.itemId }, function(err, res){
            if (res[0].stock_quantity < answer.quantity) {
                console.log("Sorry we dont have enough of that product!");
            } else {
                var stockLeft = res[0].stock_quantity - answer.quantity;

                console.log("You bought "+answer.quantity+" of "+ res[0].product_name+" !")
                
                console.log ("Your total is: $"+answer.quantity*res[0].price+".");
                
                connection.query("UPDATE products SET ? WHERE ?", [
                    {
                        stock_quantity: stockLeft
                    },
                    {
                        item_id: answer.itemId
                    }
                ], function(e, re) {
                    console.log(re.affectedRows + " product(s) updated!");
                    console.log(res[0].stock_quantity-answer.quantity+ " Left in Stock")
                    connection.end();
                });
            }
        });
    });
}
