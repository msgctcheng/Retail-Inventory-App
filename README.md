# "BAMAZON" Inventory/Retail App
                                Node.js | "inquirer" - npm | "mysql" - npm | MySQL | MAMP

### A Terminal/Bash Based Retail App w/ MySQL Inventory

* YouTube Demo:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/hWOtMMcRFXM/0.jpg)](http://www.youtube.com/watch?v=hWOtMMcRFXM)

* This app uses a MySQL database called `bamazon` with a table containing  the following information for ten products:
    * `item_id`
    * `product_name`
    * `department_name`
    * `price`
    * `stock_quantity`

* Upon executing the app with `node bamazonCustomer.js` the app will query the SQL database and display all the products.

![alt text](https://i.imgur.com/iTKXikE.png)

* After displaying all products the app uses `inquirer` to prompt the user for a products `item_id` 

![alt text](https://i.imgur.com/eQEwHTc.png)

* After entering a product id the app prompts the user for a quanity to purchase.

![alt text](https://i.imgur.com/ZBvJZlZ.png)

* If there are not enough of the product in stock the app notifies the user.

![alt text](https://i.imgur.com/U4lTHBi.png)

* If there are enough the app will treat the user input as an order and update the SQL database's stock based on what product and how many were purchased.

![alt text](https://i.imgur.com/YUVfIWQ.png)

 

