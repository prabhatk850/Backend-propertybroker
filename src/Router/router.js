const express = require('express')
const multer = require('multer');
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname );
    }
});
const upload = multer({ storage: storage });


const {addPost,addphotos,viewPost,updatePost} = require('../Controller/Property')

// router.route("/property").post(addPost)
router.route("/property").post(upload.fields([{name:"pic",maxCount:1},{name:"altpic",minCount:4}]),addphotos,addPost)
router.route("/property").get(viewPost)
router.route("/property").put(updatePost)


module.exports = router 