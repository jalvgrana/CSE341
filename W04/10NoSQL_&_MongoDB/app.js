//*******************************************************************
//5. Installing the MongoDB Driver (7:01)
//6. Creating the Database Connection (3:25)
//7. Finishing the Database Connection (4:21)
//8. Using the Database Connection (5:14)
//9. Creating Products (2:08)
//11. Fetching All Products (4:34)
//12. Fetching a Single Product (7:45)
//13. Making the "Edit" & "Delete" Buttons Work Again (2:21)
//14. Working on the Product Model to Edit our Product (7:14)
//15. Finishing the "Update Product" Code (3:57)
//16. One Note About Updating Products (1:46)
//17. Deleting Products (3:30)
//18. Fixing the "Add Product" Functionality (1:28)
//19. Creating New Users (7:00)
//20. Storing the User in our Database (5:40)
//21. Working on Cart Items & Orders (7:13)
//22. Adding the "Add to Cart" Functionality (6:14)
//23. Storing Multiple Products in the Cart (7:01)
//24. Displaying the Cart Items (9:20)
//25. Fixing a Bug (1:02)
//26. Deleting Cart Items (4:02)
//27. Adding an Order (4:36)
//28. Adding Relational Order Data (6:21)
//29. Getting Orders (3:20)
//30. Removing Deleted Items From the Cart (2:58)
//*******************************************************************

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("5baa2528563f16379fc8a610")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
