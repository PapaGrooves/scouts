// routes/imageRoutes.js
const express = require('express');
const multer = require('multer');
const imageController = require('../controllers/imgController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), imageController.uploadImage);
router.get('/', imageController.getImages);




module.exports = router;