const express = require("express");
const router = express.Router();
const passport = require("passport");
const bd = require("../db/MongoUtils.js");
const bcrypt = require("bcrypt");

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  bd.users.findByUsername(req.body.username).then(user => {
    try {
      console.log("se trajo al usuario hpta", user);
      if ( bcrypt.compare(req.body.password, user.password)){
        passport.authenticate("local", { failureRedirect: "/login" }),
        function (req, res) {
          res.redirect("/");
        };
      }
    } catch (e) {
      res.status(500).send();
    }
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get(
  "/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function (req, res) {
    res.render("profile", { user: req.user });
  }
);

router.get("/getUser", (req, res) => {
  return res.json(req.user || null);
});

module.exports = router;
