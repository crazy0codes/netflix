const express = require('express');
const app = express();

const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /login route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /login route.');
});

module.exports = router;