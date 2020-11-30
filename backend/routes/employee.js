// SJSU CMPE 226 Fall 2020 TEAM3
const express = require('express');
const router = express.Router();
const pool = require('../mysqlDB.js');

router.get('/crops/get/:employee_id', (req, res) => {
  console.log('Get crops');
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

router.post('/crops/update', async (req, res) => {
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

router.get('/events/get/:employee_id', (req, res) => {
  console.log('Get My Events');
  console.log(req.params.employee_id);
  let sql_query = `CALL get_organizing_events('${req.params.employee_id}');`;
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

router.post('/events/add', async (req, res) => {
  console.log('Add event');
  console.log(req.body);
  let sql = `CALL add_event('${req.body.event_name}', '${req.body.date}', '${req.body.employee_id}', '${req.body.event_description}' ,'${req.body.price}');`;
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
    if (result && result.length > 0 && result[0][0].status === 'EVENT_ADDED') {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    } else if (
      result &&
      result.length > 0 &&
      result[0][0].status === 'EVENT_EXISTS'
    ) {
      res.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    }
  });
});

router.get('/rawmaterials/getattending/:employee_id', (req, res) => {
  console.log('Get tending Raw materials');
  let sql_query = `CALL get_attending_raw_materials('${req.params.employee_id}');`;
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
      console.log(result);
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/rawmaterials/getPurchased/:employee_id', (req, res) => {
  console.log('getPurchased Raw materials');
  console.log(req.params.employee_id);
  let sql_query = `CALL get_purchased_raw_materials('${req.params.employee_id}');`;
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
      console.log(result);
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/rawmaterials/purchase', async (req, res) => {
  console.log('purchase rawmaterials');
  console.log(req.body);
  let sql = `CALL purchase_rawmaterial('${req.body.raw_material_id}', '${req.body.purchase_qty}', '${req.body.employee_id}');`;
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
    if (result && result.length > 0 && result[0][0].status === 'PURCHASED') {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    } else if (
      result &&
      result.length > 0 &&
      result[0][0].status === 'INVALID'
    ) {
      res.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    }
  });
});

router.post('/rawmaterials/update', async (req, res) => {
  console.log('update rawmaterial');
  console.log(req.body);
  let sql = `CALL update_rawmaterial_quantity('${req.body.raw_material_id}', '${req.body.update_qty}');`;
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
    if (result && result.length > 0 && result[0][0].status === 'UPDATED') {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    } else if (
      (result && result.length > 0 && result[0][0].status === 'INVALID') ||
      result[0][0].status === 'NO RECORD'
    ) {
      res.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0].status);
    }
  });
});

module.exports = router;
