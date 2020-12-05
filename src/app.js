import express from "express";
import morgan from "morgan";

import pkg from "../package.json";
import itemsRoutes from "./routes/items.routes";

const app = express();

// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
app.get("/?(api)?", (req, res) => {
  res.json({
    message: "Welcome to my Meli API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});
// Routes
app.use("/api/items", itemsRoutes);

export default app;
