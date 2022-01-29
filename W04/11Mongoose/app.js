//*******************************************************************
//3. Connecting to the MongoDB Server with Mongoose (4:47)
//4. Creating the Product Schema (6:01)
//5. Saving Data Through Mongoose (6:10)
//6. Fetching All Products (2:27)
//7. Fetching a Single Product (1:24)
//8. Updating Products (4:14)
//9. Deleting Products (1:19)
//10. Adding and Using a User Model (6:36)
//11. Using Relations in Mongoose (3:44)
//12. One Important Thing About Fetching Relations (3:53)
//13. Working on the Shopping Cart (5:25)
//14. Loading the Cart (5:12)
//15. Deleting Cart Items (2:45)
//16. Creating & Getting Orders (9:56)
//17. Storing All Order Related Data (1:52)
//18. Clearing the Cart After Storing an Order (1:59)
//19. Getting & Displaying the Orders (3:40)
//*******************************************************************
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("5bab316ce0a7c75f783cb8a8")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop?retryWrites=true"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Max",
          email: "max@test.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
