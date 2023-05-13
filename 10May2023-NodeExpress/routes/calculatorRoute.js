var express = require('express');
var router = express.Router();

router.get('/add', (req, res) => {
    console.log(req.query)
    res.status(200)
    res.json({
         "result": parseInt(req.query.num1) + parseInt(req.query.num2
        
        )});
})


module.exports = router;