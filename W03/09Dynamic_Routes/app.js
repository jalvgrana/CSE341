//***********************************************************
// 3. Adding the Product ID to the Path (4:34)
// 4. Extracting Dynamic Params (4:32)
// 5. Loading Product Detail Data (4:52)
// 6. Rendering the Product Detail View (5:26)
// 7. Passing Data with POST Requests (7:19)
// 8. Adding a Cart Model (12:29)
// 9. Using Query Params (7:54)
// 10. Pre-Populating the Edit Product Page with Data (6:46)
// 11. Linking to the Edit Page (2:20)
// 12. Editing the Product Data (8:58)
// 13. Adding the Product-Delete Functionality (5:34)
// 14. Deleting Cart Items (8:11)
// 15. Displaying Cart Items on the Cart Page (8:45)
// 16. Deleting Cart Items (5:24)
// 17. Fixing a Delete Product Bug (1:31)
//***********************************************************
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
