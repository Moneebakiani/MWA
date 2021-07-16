const express = require('express');
const router = express.Router();
const { imageUpload } = require("../utils/imageUpload");
const userError = 400;
const successError = 200;


// For Single image upload (field name is -> 'image')
router.post('/', imageUpload.single('image'), (req, res) => {
    console.log(`file to upload:`);
    console.log(req.file);
    const response = {
        status: successError,
        message: "success"
    }
    response.status = successError;
    res.status(response.status).json(response.message);
}, (error, req, res, next) => {
    res.status(userError).json("fail");
})

// For Multiple image upload
// router.post('/uploadBulkImage', imageUpload.array('images', 4), (req, res) => {
//     res.send(req.files);
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message});
// })

module.exports = router
