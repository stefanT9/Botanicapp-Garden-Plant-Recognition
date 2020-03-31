const express = require('express');
const router = express.Router();
const controller = require('../controller/plantControl');

router.get('/', controller.getPlant);

router.post('/',controller.postPlant);



module.exports = router;