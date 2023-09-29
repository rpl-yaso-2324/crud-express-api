const express = require("express");
const router = express.Router();
var { index, store } = require("../controllers/postController");

/**
 * INDEX POSTS
 */

router.get("/", index);
router.post("/store", store);

module.exports = router;
