const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

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

// ----------------
// Data endpoints
// ----------------

// Get information of current user
router.get("/getUser", (req, res) => {
  return res.json(req.user || null);
});

module.exports = router;
