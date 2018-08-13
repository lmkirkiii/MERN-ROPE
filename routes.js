const express = require('express');
const router = express.Router();
const controller = require("./controller.js")

router.get('/', controller.index)
router.get('/new', controller.new)
router.post('/', controller.create)
router.put('/:id',controller.update)
router.delete('/:id', controller.delete)


module.exports = router;