const { Router } = require('express');
const healthcheck = require('./healthcheck');

const router = Router();

router.use('/', healthcheck);

router.get('/api', (req, res) => {
  return res.json({ msg: 'Hello' });
});

module.exports = router;
