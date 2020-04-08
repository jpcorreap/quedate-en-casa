const express = require("express");
const router = express.Router();
const bd = require("../db/MongoUtils.js");
const bcrypt = require("bcrypt");

router.get("/", function (req, res) {
  res.render("home", { user: req.user });
});


router.get("/register", function(req,res){
  res.render("register");
});

router.post("/register", async (req, res) => {
  try{
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashedPassword);
    console.log("se creo", req.body);
    const user = {user: req.body.name , password: hashedPassword}
    bd.users.create(user).then(res.redirect("/login"));
    console.log("se creo", req.body);
  }
  catch (e)
  {
    res.status(500).send();
  }
  
 
})

module.exports = router;

