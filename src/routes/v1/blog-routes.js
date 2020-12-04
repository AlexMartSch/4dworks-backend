const express = require('express')
const blogController = require('../../controllers/v1/blogs-controller')
const router = express.Router();


router.post('/create', blogController.createEntry)
router.put('/update', blogController.updateEntry)
router.delete('/delete', blogController.deleteEntry)
router.get('/get-all', blogController.getEntries)
router.get('/get/:blogId', blogController.getEntry)

module.exports = router