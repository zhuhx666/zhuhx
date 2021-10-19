var express = require('express');
var router = express.Router();

var loki = require('lokijs');

var db = new loki('data.json', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  var bookings = db.getCollection("bookings");
  if (bookings === null) {
    bookings = db.addCollection("bookings");
  }
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Expresso' });
});

/* Handle the Form */
router.post('/form', function (req, res) {

  var response = {
    header: req.headers,
    body: req.body
  };

  req.body.numTickets = parseInt(req.body.numTickets);
  db.getCollection("bookings").insert(req.body);

  res.json(response);
});

/* Display all Bookings */
router.get('/bookings', function (req, res) {

  var result = db.getCollection("bookings").find();

  res.render('bookings', { bookings: result });
});

/* Display a single Booking */
router.get('/bookings/read/:id', function (req, res) {

  console.log(req.params.id)

  let result = db.getCollection("bookings").findOne({ $loki: parseInt(req.params.id) });

  if (result)
    res.render('booking', { booking: result });
  else
    res.status(404).send('Unable to find the requested resource!');

});
// Delete a single Booking 
router.post('/bookings/delete/:id', function (req, res) {

  // db.getCollection("bookings").findAndRemove({ $loki: parseInt(req.params.id) });

  let result = db.getCollection("bookings").findOne({ $loki: parseInt(req.params.id) });
  
  if (!result) return res.status(404).send('Unable to find the requested resource!');
 
  db.getCollection("bookings").remove(result);
  
  res.send("Booking deleted.");
   
});



// Form for updating a single Booking 
router.get('/bookings/update/:id', function (req, res) {

  let result = db.getCollection("bookings").findOne({ $loki: parseInt(req.params.id) });

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.render("update", { booking: result })

});

// Updating a single Booking 
router.post('/bookings/update/:id', function (req, res) {

  let result = db.getCollection("bookings").findOne({ $loki: parseInt(req.params.id) });

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  db.getCollection("bookings").findAndUpdate({ $loki: parseInt(req.params.id) },
    function (item) {
      Object.assign(item, req.body)
    });

  res.send("Booking updated.");

});

/* Searching */
router.get('/bookings/search', function (req, res) {

  var whereClause = {};

  if (req.query.name) whereClause.name = { $regex: req.query.name };

  var parsedNumTickets = parseInt(req.query.numTickets);
  if (!isNaN(parsedNumTickets)) whereClause.numTickets = parsedNumTickets;

  let results = db.getCollection("bookings").find(whereClause)

  return res.render('bookings', { bookings: results });

});

module.exports = router;