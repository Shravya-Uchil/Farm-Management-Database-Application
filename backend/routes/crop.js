// SJSU CMPE 226 Fall 2020 TEAM3
const express = require('express');
const router = express.Router();
const pool = require('../mysqlDB.js');

router.get('/all', (req, res) => {
  console.log('Get all crops');
  let sql_query = `CALL get_all_crop();`;
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

router.get('/allavailable', (req, res) => {
  console.log('Get available crops');
  let sql_query = `CALL get_available_crop();`;
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

router.post('/crops/update', (req, res) => {
  console.log('Update crops');
  console.log(req.body);
  let sql = `CALL update_crop('${req.body.crop_qty}', '${req.body.harvest_status}', '${req.body.crop_status}' ,'${req.body.employee_id}', '${req.body.crop_id}');`;
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
    if (result && result.length > 0 && result[0][0].status === 'CROP_UPDATED') {
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

router.post('/purchase', (req, res) => {
  console.log('purchase crops');
  console.log(req.body);
  let sql = `CALL place_order('${req.body.customer_id}');`;
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
    if (result && result.length > 0 && result[0][0].status === 'ORDER_PLACED') {
      console.log('order placed');
      for (const cart_item of req.body.cart) {
        let sql2 = `CALL add_order_details(${result[0][0].order_id}, ${cart_item.crop_id}, ${cart_item.qty}, '${req.body.customer_type}');`;
        console.log('sql 2 item details: ', sql2);
        pool.query(sql2, (err2, result2) => {
          console.log(result2);
          if (err2) {
            console.log(err2);
            res.writeHead(500, {
              'Content-Type': 'text/plain',
            });
            res.end('Database Error');
          }
        });
      }
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0][0]));
    }
  });
});

router.post('/updateprice', (req, res) => {
  console.log('Update order price');
  let sql = `CALL update_order_cost(${req.body.order_id});`;
  pool.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Database Error');
    } else {
      console.log(result);
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end('ORDER_PLACED');
    }
  });
});

router.post('/purchase', (req, res) => {
  console.log('1. Place order');
  console.log(req.body);
  let sql = `CALL place_order('${req.body.customer_id}');`;
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
    if (result && result.length > 0 && result[0][0].status === 'ORDER_PLACED') {
      console.log('2. Update order details');
      for (const cart_item of req.body.cart) {
        let sql2 = `CALL add_order_details(${result[0][0].order_id}, ${cart_item.crop_id}, ${cart_item.qty}, '${req.body.customer_type}');`;
        pool.query(sql2, (err2, result2) => {
          if (err2) {
            console.log(err2);
            res.writeHead(500, {
              'Content-Type': 'text/plain',
            });
            res.end('Database Error');
          }
        });
      }

      console.log('3. Update order price');
      let sql = `CALL update_order_cost(${req.body.order_id});`;
      pool.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.writeHead(500, {
            'Content-Type': 'text/plain',
          });
          res.end('Database Error');
        } else {
          console.log(result);
          res.writeHead(200, {
            'Content-Type': 'text/plain',
          });
          res.end('ORDER_PLACED');
        }
      });
    }
  });
});

router.post('/updateprice', (req, res) => {});

module.exports = router;
