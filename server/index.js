import express from "express";
import pg from "pg"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());

const db =new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Travel_planner",
    password: "@amrt50020141",
    port: 5432
})

db.connect();

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/api/destinations", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM visited_place"); 
    res.json(result.rows); 
    console.log(result.rows)
  } catch (err) {
    console.error("Error fetching destinations:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/put", async (req,res)=>{
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

app.post("/api/delete", async (req,res)=>{
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


app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port,() => {
    console.log("working");
})