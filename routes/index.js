const express = require("express");
const router = express.Router();
const bd = require("../db/MongoUtils.js");
const bu = require("../db/BcryptUtils.js");

router.post("/register", (req, res) => {
  try {
    bd.users.findByUsername(req.body.username, (nada, user) => {
      if (req.body.password == req.body.passwordC) {
        if (user == null) {
          let hashedPassword = bu.Accounts.generateHash(req.body.password);
          bd.users
            .create(req.body.username, hashedPassword)
            .then(res.redirect("/"));
        } else {
          res.redirect("/");
        }
      } else {
        res.redirect("/");
      }
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

// Para facilitar la interacción del usuario
router.get("/MyActivities", (req, res) => {
  res.redirect("/");
});

router.get("/Activities", (req, res) => {
  res.redirect("/");
});

router.get("/Custom", (req, res) => {
  res.redirect("/");
});

// ----------------
// Data endpoints
// ----------------

// Get all global activities
router.get("/getAllActivities", (req, res) => {
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
router.get("/save/:userID/:activityID", (req, res) => {
  bd.users
    .saveActivity(req.params.userID, req.params.activityID)
    .then(() => res.redirect("/"));
});

// Create and persist new personal activity for an specific user
router.post("/savePersonalActivity/:userID", (req, res) => {
  bd.users
    .savePersonalActivity(req.params.userID, req.body)
    .then(() => res.redirect("/"));
});

// Delete saved activity for an specific user
router.get("/deleteSavedActivity/:userID/:activityID", (req, res) => {
  bd.users
    .deleteSavedActivity(req.params.userID, req.params.activityID)
    .then(() => res.redirect("/"));
});

// Delete personal activity for an specific user
router.get("/deletePersonalActivity/:userID/:activityTitle", (req, res) => {
  bd.users.getPersonalActivities(req.params.userID).then((user) => {
    bd.users
      .deletePersonalActivity(user, req.params.activityTitle)
      .then(() => res.redirect("/"));
  });
});

// Get all activities specified in JSON file
router.get("/findActivitiesByIDs/:ids", (req, res) => {
  bd.actividades.getAll().then((activities) => {
    let retornar = [];

    activities.forEach((activitie) => {
      if (req.params.ids.includes(new String(activitie._id))) {
        retornar.push(activitie);
      }
    });

    res.json(retornar);
  });
});

module.exports = router;
