import express from "express";
import pg from "pg"
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

const db =new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Travel_planner",
    password: "@amrt50020141",
    port: 5432
})

db.connect();

app.use("/public", express.static(path.join(__dirname, "public")));

//user
app.get("/api/user/places", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM visited_place"); 
    res.json(result.rows); 
    console.log(result.rows)
  } catch (err) {
    console.error("Error fetching destinations:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/user/places/put", async (req,res)=>{
  const {user_id, place, country_code} = req.body
  console.log(req.body)
  const userIdInt = parseInt(user_id);
  try{
    db.query("INSERT INTO visited_place (user_id,place,country_code) VALUES ($1, $2, $3)",[userIdInt, place, country_code],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "Inserted successfully", result });
      }
    )
  }
  catch(error){
    console.log(error)
  }
})

app.post("/api/user/places/delete", async (req,res)=>{
  const {user_id, place, country_code} = req.body
  console.log(req.body)
  try{
    db.query("DELETE FROM visited_place WHERE user_id=$1 AND place =$2 AND country_code = $3",[user_id, place, country_code],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: " deleted successfully", result });
      }
    )
  }
  catch(error){
    console.log(error)
  }
})

app.get("/api/destinations/dis", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM destinationsbyadmin"); 
    console.log(result.rows)
    return res.status(200).json(result.rows)
  } catch (err) {
    console.error("Error fetching destinations:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//admin
app.get("/destinations/new", (req, res) => {
  res.render("host.ejs", {
    formData: {}
  });
});


app.post("/destinations/new", async (req,res)=>{
  const { name, description, price, icon } = req.body;
  console.log("POST /items HIT");
  console.log(req.body);
    if (!name || !description || !price) {
      return res.render("host.ejs", {
        formData: req.body
      });
    }

    await db.query(
      "INSERT INTO destinationsbyadmin (name, description, price, icon) VALUES ($1, $2, $3, $4)",
      [name, description, price, icon]
    );
    res.redirect("/destinations/new");
})

app.post("/destinations/remove", async (req,res)=>{
  const { name } = req.body;
  console.log("POST /items HIT");
  console.log(req.body);
    if (!name) {
      return res.render("host.ejs", {
        formData: req.body
      });
    }

    await db.query(
      "DELETE FROM destinationsbyadmin WHERE name = $1",
      [name]
    );

  res.redirect("/");
})

app.use(express.static("dist"));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});


app.listen(port,() => {
    console.log("working");
})