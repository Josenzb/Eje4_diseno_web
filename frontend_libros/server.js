import express from "express";
import path from "path";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import { fileURLToPath } from "url";

const app = express();
const API_URL = "http://127.0.0.1:8000/api/libros/";

// Necesario para __dirname al usar ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// LISTAR LIBROS
app.get("/", async (req, res) => {
  const respuesta = await fetch(API_URL);
  const libros = await respuesta.json();
  res.render("index", { libros });
});

// FORM CREAR
app.get("/crear", (req, res) => {
  res.render("crear");
});

// CREAR LIBRO
app.post("/crear", async (req, res) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });
  res.redirect("/");
});

// FORM EDITAR
app.get("/editar/:id", async (req, res) => {
  const respuesta = await fetch(API_URL + req.params.id + "/");
  const libro = await respuesta.json();
  res.render("editar", { libro });
});

// ACTUALIZAR LIBRO
app.post("/editar/:id", async (req, res) => {
  await fetch(API_URL + req.params.id + "/", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });
  res.redirect("/");
});

// ELIMINAR LIBRO
app.post("/eliminar/:id", async (req, res) => {
  await fetch(API_URL + req.params.id + "/", {
    method: "DELETE"
  });
  res.redirect("/");
});

app.listen(3001, () => {
  console.log("Frontend ejecutándose en http://localhost:3001");
});
