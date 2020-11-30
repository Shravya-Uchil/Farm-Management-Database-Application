// SJSU CMPE 226 Fall 2020 TEAM3
const express = require('express');
const router = express.Router();
const pool = require('../mysqlDB.js');

router.get('/all', (req, res) => {
  console.log('Get all crops');
  let sql_query = `CALL get_all_event();`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/:customer_id', (req, res) => {
  console.log('Get my events');
  console.log(req.params.customer_id);
  let sql_query = `CALL get_events_by_customer('${req.params.customer_id}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/register', (req, res) => {
  console.log('Register to event');
  console.log(req.body);
  let sql = `CALL register_event('${req.body.event_id}', '${req.body.customer_id}');`;
  pool.query(sql, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result && result.length > 0 && result[0][0].status === 'REGISTERED') {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    } else if (
      result &&
      result.length > 0 &&
      result[0][0].status === 'NO_RECORD'
    ) {
      res.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    }
  });
});

module.exports = router;
