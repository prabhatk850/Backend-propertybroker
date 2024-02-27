const express = require('express')
const router = express.Router()

const {addPost,viewPost,updatePost} = require('../Controller/Property')

router.route("/property").post(addPost)
router.route("/property").get(viewPost)
router.route("/property").put(updatePost)

module.exports = router 