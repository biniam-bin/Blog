const router = require("express").Router();
const User = require("../models/User");



router.post("/register", async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
