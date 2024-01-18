const express = require('express')
const router = express.Router()

const {addPost,viewPost} = require('../Controller/Property')

router.route("/addproperty").post(addPost)
router.route("/viewproperty").get(viewPost)

module.exports = router