const multer = require('multer');

const imageStorage = multer.diskStorage({
    destination: `${__dirname}/../../public/images`, // Destination to store image
    filename: (req, file, cb) => {
        cb(null, file.originalname.replace(/ /g, "_")); // <- file name
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 2 * 1000 * 1000  // 2,000,000 Bytes = 2 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {  // upload only png and jpg format
            return cb(new Error('Please upload a png or jpg/jpeg Image'));
        }
        cb(undefined, true);
    }
});

module.exports = { imageStorage, imageUpload };
