//************************************************/
//2. Sharing Data Across Requests & Users (8:05)
//4. Installing & Implementing Pug (11:04)
//5. Outputting Dynamic Content (11:02)
//6. Converting HTML Files to Pug (5:55)
//7. Adding a Layout (5:35)
//8. Finishing the Pug Template (5:50)
//9. Working with Handlebars (5:08)
//************************************************/
const path = require("path");

const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  //res.status(404).send("<h1>Page not found</h1>");
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
