import express from "express";
import { supabase } from './supabaseClient.js'
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
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));

//user
app.get("/api/user/places", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("visited_place")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    console.log(data);
    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/api/user/places/put", async (req, res) => {
  try {
    const { user_id, place, country_code } = req.body;

    if (!user_id || !place || !country_code) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const { error } = await supabase
      .from("visited_place")
      .insert({
        user_id: Number(user_id),
        place,
        country_code
      });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: "Inserted successfully" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/user/places/delete", async (req, res) => {
  try {
    const { user_id, place, country_code } = req.body;

    if (!user_id || !place || !country_code) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const { error } = await supabase
      .from("visited_place")
      .delete()
      .eq("user_id", Number(user_id))
      .eq("place", place)
      .eq("country_code", country_code);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/api/destinations/dis", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("destinationsbyadmin")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


//admin
app.get("/destinations/new", (req, res) => {
  res.render("host.ejs", {
    formData: {}
  });
});


app.post("/destinations/new", async (req, res) => {
  try {
    const { name, description, price, icon } = req.body;

    console.log("POST /destinations/new HIT");
    console.log(req.body);

    if (!name || !description || !price) {
      return res.render("host.ejs", {
        formData: req.body
      });
    }

    const { error } = await supabase
      .from("destinationsbyadmin")
      .insert({
        name,
        description,
        price,
        icon
      });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).send("Database insert failed");
    }

    res.redirect("/destinations/new");
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Internal server error");
  }
});

app.post("/destinations/remove", async (req, res) => {
  try {
    const { name } = req.body;

    console.log("POST /destinations/remove HIT");
    console.log(req.body);

    if (!name) {
      return res.render("host.ejs", {
        formData: req.body
      });
    }

    const { error } = await supabase
      .from("destinationsbyadmin")
      .delete()
      .eq("name", name);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).send("Delete failed");
    }

    res.redirect("/");
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Internal server error");
  }
});

app.use(express.static("dist"));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});


app.listen(port,() => {
    console.log("working");
})