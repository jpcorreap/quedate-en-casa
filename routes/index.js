const express = require("express");
const router = express.Router();
const bd = require("../db/MongoUtils.js");
const bu = require("../db/BcryptUtils.js");
const blockspring = require("blockspring");

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

// Extra dataendpoints
router.get("/legalwatch", (req, res) => {
  res.render("legalwatch", {});
});

router.post("/postRespuesta", (req, res) => {
  blockspring.runParsed(
    "spanish-keyword-extractor-monkeylearn",
    { text: req.body.texto },
    { api_key: process.env.BLOCKSPRING_KEY},
    function (resAPI) {
      res.json(resAPI.params.keywords);
    }
  );
});

router.get("/pruebalegalwatch", (req, res) => {
  res.json([
    {
      count: 3,
      relevance: "0.968",
      positions_in_text: [49, 285, 309],
      keyword: "cuenta",
    },
    {
      count: 2,
      relevance: "0.645",
      positions_in_text: [64, 295],
      keyword: "acceso",
    },
    {
      count: 1,
      relevance: "0.484",
      positions_in_text: [74],
      keyword: "portal EXATEC",
    },
    {
      count: 1,
      relevance: "0.484",
      positions_in_text: [330],
      keyword: "correo EXATEC",
    },
    {
      count: 1,
      relevance: "0.484",
      positions_in_text: [5],
      keyword: "Juan Pablo",
    },
    {
      count: 1,
      relevance: "0.323",
      positions_in_text: [169],
      keyword: "lapso",
    },
    {
      count: 3,
      relevance: "0.323",
      positions_in_text: [81, 235, 337],
      keyword: "EXATEC",
    },
    {
      count: 1,
      relevance: "0.323",
      positions_in_text: [227],
      keyword: "noreply",
    },
    { count: 1, relevance: "0.323", positions_in_text: [256], keyword: "liga" },
    { count: 1, relevance: "0.323", positions_in_text: [242], keyword: "tec" },
  ]);
});

module.exports = router;
