const express = require("express");
const router = express.Router();

//middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

//controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/ingredient");

//routes
router.post("/ingredient", authCheck, adminCheck, create);
router.get("/ingredients", list);
router.get("/ingredient/:slug", read);
router.put("/ingredient/:slug", authCheck, adminCheck, update);
router.delete("/ingredient/:slug", authCheck, adminCheck, remove);

module.exports = router;