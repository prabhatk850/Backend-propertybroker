const express = require('express')
const router = express.Router()

const {addPost,viewPost} = require('../Controller/Property')

router.route("/property").post(addPost)
router.route("/property").get(viewPost)

module.exports = router