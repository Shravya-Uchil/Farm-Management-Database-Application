const express = require('express');
const router = express.Router();
const pool = require('../mysqlDB.js');

router.get('/all', (req, res) => {
  console.log('Get all orders');
  let sql_query = `CALL get_all_order();`;
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

router.get('/customer/:customer_id', (req, res) => {
  console.log('Get customer orders', req.params.customer_id);
  let sql_query = `CALL get_order_by_customer('${req.params.customer_id}');`;
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

router.post('/update/', (req, res) => {
  console.log('Update order', req.body);
  let sql_query = `CALL update_order_status('${req.body.order_id}', '${req.body.order_status}');`;
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

module.exports = router;
