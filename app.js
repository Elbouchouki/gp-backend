const express = require("express");

const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/user");
const recuRoute = require("./routes/recu");
const mouvementRoute = require("./routes/mouvement");
const articleRoute = require("./routes/article");
const statisticRoute = require("./routes/statistic");
const villeRoute = require("./routes/ville");
app.use("/users", userRoute);
app.use("/villes", villeRoute);
app.use("/recus", recuRoute);
app.use("/mouvements", mouvementRoute);
app.use("/articles", articleRoute);
app.use("/statistic", statisticRoute);

module.exports = app;
