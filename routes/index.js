const express = require("express");
const router = express.Router();
const bd = require("../db/MongoUtils.js");
const bu = require("../db/BcryptUtils.js");

router.get("/", function (req, res) {
  res.render("home", { user: req.user });
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  try {
    bd.users.findByUsername(req.body.username, (nada, user) => {
      console.log("Llegó el usuario ", user);
      if (req.body.password == req.body.passwordC) {
        if (user == null) {
          let hashedPassword = bu.Accounts.generateHash(req.body.password);
          bd.users
            .create(req.body.username, hashedPassword)
            .then(res.redirect("/login"));
        } else {
          console.log(req.body.username, "already exists!");
          res.redirect("/register");
        }
      } else {
        console.log(req.body.username, " las contrasenas no coinciden!");
        res.redirect("/register");
      }
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

// Data endpoints

// Get all global activities
router.get("/activities", (req, res) => {
  bd.actividades.getAll().then((activities) => {
    res.json(activities);
  });
});

// Get personal activities created by an specific user
router.post("/:userID/activities", (req, res) => {
  bd.actividades.getByUserID(req.params.userID).then((activities) => {
    res.json(activities);
  });
});

// Save activity for an specific user
router.get("/save/:userID/:activitieID", (req, res) => {
  bd.users
    .saveActivity(req.params.userID, req.params.userID)
    .then(() => res.redirect("http://localhost:3000/Activities"));
});

module.exports = router;
