require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Directorio público | estático
app.use(express.static("public"));

//Ruta raiz
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Christopher Carrasco",
    titulo: "Sitio web con NodeJS",
  });
});

//Ruta elementos
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Christopher Carrasco",
    titulo: "Sitio web con NodeJS",
  });
});

//Ruta genérico
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Christopher Carrasco",
    titulo: "Sitio web con NodeJS",
  });
});

//Otros | 404 | Not found
app.get("*", (req, res) => {
  res.render("404");
});

//Puerto
app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
