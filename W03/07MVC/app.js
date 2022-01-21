//****************************************************
// 3. Adding Controllers (9:20)
// 4. Finishing the Controllers (2:37)
// 5. Adding a Product Model (8:05)
// 6. Storing Data in Files Via the Model (9:39)
// 7. Fetching Data from Files Via the Model (3:55)
// 8.  Refactoring the File Storage Code (4:25)
//****************************************************
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
