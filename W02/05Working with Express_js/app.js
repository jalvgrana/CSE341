//************************************************/
// 12. Using Express Router (8:04)
// 13. Adding a 404 Error Page (2:30)
// 14. Filtering Paths (3:38)
// 15. Creating HTML Pages (5:09)
// 16. Serving HTML Pages (7:19)
// 17. Returning a 404 Page (2:00)
// 18. Using a Helper Function for Navigation (3:37)
// 19. Styling our Pages (13:58)
// 20. Serving Files Statically (7:49)
//************************************************/
const path = require("path");

const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  //res.status(404).send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
