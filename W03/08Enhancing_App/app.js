//*****************************************
//2. Creating the Shop Structure (5:34)
//3. Working on the Navigation (2:49)
//4. Registering the Routes (11:04)
//5. Storing Product Data (5:15)
//6. Displaying Product Data (3:02)
//7. Editing & Deleting Products (4:47)
//8. Adding Another Item (2:08)
//*****************************************
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
