var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var path = require('path');

var cors = require('cors');

var connection = mysql.createConnection({
                host: '34.133.59.206',
                user: 'root',
                password: 'Team2Server',
                database: 'team2Data'
});

connection.connect();


var app = express();

app.use(cors()); // Add this line to enable CORS

// set up ejs view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '../public'));

/* GET home page, respond by rendering index.ejs */
app.get('/', function(req, res) {
  res.render('index', { title: 'Mark Attendance' });
});

app.get('/success', function(req, res) {
      res.send({'message': 'Attendance marked successfully!'});
});
 
// this code is executed when a user clicks the form submit button
app.post('/mark', function(req, res) {
  var netid = req.body.netid;
   
  var sql = `INSERT INTO Users (netid, present) VALUES ('${netid}',1)`;

console.log(sql);
  connection.query(sql, function(err, result) {
    if (err) {
      res.send(err)
      return;
    }
    res.redirect('/success');
  });
});

//search for Athlete via join Athlete and Fun Fact
app.get('/searchAthlete', function(req, res) {
  console.log(req.query.athleteName1)
  const athleteName1 = req.query.athleteName1
  connection.query("SELECT Athletes.Name, Athletes.Discipline, Athletes.NOC FROM Athletes WHERE Name = ?", [athleteName1], (err, result) => {
  //connection.query("SELECT * FROM Athletes WHERE Name = 'ABAD Nestor'", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error retrieving data.' });
    } else {
      res.status(200).send(result);
    }
  });
});

//search for Athlete via join Athlete and Fun Fact
app.get('/advancedQueury1', function(req, res) {
  connection.query("SELECT distinct Athletes.Discipline, Coaches.Name FROM Coaches INNER JOIN Athletes ON Coaches.NOC = Athletes.NOC AND Coaches.Discipline = Athletes.Discipline INNER JOIN MedalsByAthlete ON Athletes.Name = MedalsByAthlete.Athlete_Name WHERE MedalsByAthlete.medal_type = 'Gold Medal' GROUP BY Athletes.Discipline, Coaches.Name", (err, result) => {
  //connection.query("SELECT * FROM Athletes WHERE Name = 'ABAD Nestor'", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error retrieving data.' });
    } else {
      res.status(200).send(result);
    }
  });
});

//search for Athlete via join Athlete and Fun Fact
app.get('/advancedQueury2', function(req, res) {
  connection.query("SELECT a.Name AS LosingAthlete, mba.athlete_name AS WinningAthlete, a.discipline FROM Athletes a LEFT JOIN ( SELECT DISTINCT mba.discipline, mba.athlete_name FROM MedalsByAthlete mba WHERE mba.medal_type = 'Gold Medal' ) mba ON a.Discipline = mba.discipline WHERE a.Name NOT IN ( SELECT Distinct athlete_name FROM MedalsByAthlete WHERE medal_type IN ('Gold Medal', 'Silver Medal', 'Bronze Medal') ); ", (err, result) => {
  //connection.query("SELECT * FROM Athletes WHERE Name = 'ABAD Nestor'", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error retrieving data.' });
    } else {
      res.status(200).send(result);
    }
  });
});

// insert function
app.post('/insert', function(req, res) {
  const athleteName3 = req.body.athleteName3;
  const athleteFact3 = req.body.athleteFact3;
  const sqlInsert = "INSERT INTO AthleteFacts (UserId, AthleteName, Content) VALUES (?, ?, ?)";
  connection.query(sqlInsert, [0, athleteName3, athleteFact3], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error inserting data.' });
    } else {
      res.status(200).send({ message: 'Data inserted successfully.' });
    }
  });
});

// update function
app.post('/update', function(req, res) {
  const athleteName4 = req.body.athleteName4;
  const athleteFact4 = req.body.athleteFact4;
  const sqlUpdate = "UPDATE AthleteFacts SET Content = ? WHERE AthleteName = ?";
  connection.query(sqlUpdate, [0, athleteName4, athleteFact4], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error inserting data.' });
    } else {
      res.status(200).send({ message: 'Data inserted successfully.' });
    }
  });
});




app.listen(80, function () {
    console.log('Node app is running on port 80');
});




