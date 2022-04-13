var express = require('express');
var router = express.Router();
// rootUrl = http://localhost:3000/

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.status(200).send({users: [
  //   {id: 1, name: 'Hoang', age: 12},
  //   {id: 2, name: 'Lan', age: 18},
  //   {id: 3, name: 'Nam', age: 20}
  // ]});
  res.status(500).send({
    users: [
      { id: 1, name: 'Hoang', age: 12 },
      { id: 2, name: 'Lan', age: 18 },
      { id: 3, name: 'Nam', age: 20 }
    ]
  })
});

router.get('/:id', function (req, res, next) {
  console.log("REQ WITH ID: ", req.params.id);
  res.status(200).send({ data: `This is the body of ${req.params.id}` });
});

router.post('/', function (req, res, next) {
  console.log("REQ: ", req.body);
  res.status(200).send({ ...req.body, created_at: new Date() });
})

router.post('/query', function (req, res, next) {
  console.log("QUERY: ", req.query);
  res.status(200).send({ ...req.query, created_at: new Date() });
})

module.exports = router;
