const express = require("express");
const router = express.Router();
var { index, store } = require("../controllers/postController");
const { body } = require("express-validator");

/**
 * INDEX POSTS
 */

router.get("/", index);
router.post(
	"/store",
	[
		// validation
		body("title").notEmpty(),
		body("content").notEmpty(),
	],
	store
);

/** router.post(
	"/store",
	[
		//validation
		body("title").notEmpty(),
		body("content").notEmpty(),
	],
	(req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).json({
				errors: errors.array(),
			});
		}

		//define formData
		let formData = {
			title: req.body.title,
			content: req.body.content,
		};

		// insert query
		connection.query("INSERT INTO posts SET ?", formData, function (err, rows) {
			//if(err) throw err
			if (err) {
				return res.status(500).json({
					status: false,
					message: "Internal Server Error",
				});
			} else {
				return res.status(201).json({
					status: true,
					message: "Insert Data Successfully",
					data: rows[0],
				});
			}
		});
	}
); */

module.exports = router;
