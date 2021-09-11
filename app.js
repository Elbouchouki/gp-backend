const express = require("express");

const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

const { checkAuth, checkRole } = require("./middleware/check-auth");
const { ROLE } = require("./helper/role");

const userRoute = require("./routes/user");
const recuRoute = require("./routes/recu");
const mouvementRoute = require("./routes/mouvement");
const articleRoute = require("./routes/article");
const statisticRoute = require("./routes/statistic");
const villeRoute = require("./routes/ville");
const tarifRoute = require("./routes/tarif");
const excelRoute = require("./routes/excel");
const authRoute = require("./routes/auth");
const rolePermissionRoute = require("./routes/rolePermission.js");

app.use("/users", checkAuth, checkRole([ROLE.ADMIN]), userRoute);
app.use(
  "/role_permission",
  checkAuth,
  checkRole([ROLE.ADMIN]),
  rolePermissionRoute
);
app.use(
  "/villes",
  checkAuth,
  checkRole([ROLE.ADMIN, ROLE.FINANCER, ROLE.NORMAL]),
  villeRoute
);
app.use(
  "/recus",
  checkAuth,
  checkRole([ROLE.ADMIN, ROLE.FINANCER, ROLE.NORMAL]),
  recuRoute
);
app.use(
  "/mouvements",
  checkAuth,
  checkRole([ROLE.ADMIN, ROLE.FINANCER, ROLE.NORMAL]),
  mouvementRoute
);
app.use(
  "/articles",
  checkAuth,
  checkRole([ROLE.ADMIN, ROLE.FINANCER, ROLE.NORMAL]),
  articleRoute
);
app.use(
  "/statistic",
  checkAuth,
  checkRole([ROLE.ADMIN, ROLE.FINANCER, ROLE.NORMAL]),
  statisticRoute
);
app.use(
  "/tarifs",
  checkAuth,
  checkRole([ROLE.ADMIN, ROLE.FINANCER, ROLE.NORMAL]),
  tarifRoute
);
app.use("/excel", excelRoute);
app.use("/auth", authRoute);

module.exports = app;
