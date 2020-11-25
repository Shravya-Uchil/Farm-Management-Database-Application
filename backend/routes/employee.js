const express = require('express');
const router = express.Router();
const pool = require('../mysqlDB.js');

router.get('/crops/get/:employee_id', (req, res) => {
  console.log('req.params.employee_id');
  console.log(req.params.employee_id);
  let sql_query = `CALL get_tending_crops('${req.params.employee_id}');`;
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

router.post('/crop/update', async (req, res) => {
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

module.exports = router;
