const { Router } = require('express');

const HealthcheckController = require('../controllers/healthcheck-controller');

const router = Router();

router.get('/', HealthcheckController.status);

module.exports = router;
