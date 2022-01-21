const express = require('express');

const controller = require('../controllers/users');

const router = express.Router();

router.get(`/`, controller.getData);
router.get(`/:id`, controller.getSingleData);
router.post(`/`, controller.postData);
router.put(`/:id`, controller.updateSingleData);
router.delete(`/:id`, controller.deleteSingleData);

module.exports = router;