// SJSU CMPE 226 Fall 2020 TEAM3
const express = require('express');
const router = express.Router();
const pool = require('../mysqlDB.js');

router.get('/topSoldCrops', (req, res) => {
  console.log('Get sold crops');
  let sql_query = `CALL top_sold_crops();`;
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

router.get('/leastSoldCrops', (req, res) => {
  console.log('Get leastSoldCrops');
  let sql_query = `CALL least_sold_crops();`;
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

router.get('/topProfitCrops', (req, res) => {
  console.log('Get top profit crops');
  let sql_query = `CALL top_profit_crops();`;
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

router.get('/RMBelowThreshold', (req, res) => {
  console.log('Get RM below threshold');
  let sql_query = `CALL get_rm_below_threshold();`;
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

router.get('/topRegisteredEvents', (req, res) => {
  console.log('Get top events');
  let sql_query = `CALL get_top_events();`;
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

router.get('/topCostOrders', (req, res) => {
  console.log('Get top orders');
  let sql_query = `CALL get_top_orders();`;
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

router.get('/customerDetails', (req, res) => {
  console.log('Get customer details');
  let sql_query = `CALL get_customer_details();`;
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

router.get('/rawmaterials', (req, res) => {
  console.log('Get rawmaterials admin');
  let sql_query = `CALL get_admin_RM();`;
  //let sql_query = `SELECT raw_material_provider_id, raw_material_id, raw_material_name, raw_material_quantity, qty_threshold, price, rmp_name FROM RM_details;`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/CreateCrop', (req, res) => {
  console.log('CreateCrop');
  let sql_query = `CALL create_crop_admin ('${req.body.crop_name}', '${req.body.quantity}', '${req.body.cost_price}', '${req.body.crop_status}', '${req.body.selling_price}', '${req.body.harvest_status}', '${req.body.discount}')`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/CreateRaw_Material', (req, res) => {
  console.log('Create RM');
  console.log(req.body);
  let sql_query = `CALL create_rawmaterial_admin('${req.body.raw_material_name}', '${req.body.raw_material_quantity}', '${req.body.qty_threshold}', '${req.body.price}', '${req.body.raw_material_provider_id}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/CreateRaw_Material_Provider', (req, res) => {
  console.log('Create RMP');
  console.log(req.body);
  let sql_query = `CALL create_rawmaterialprov_admin('${req.body.rmp_name}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/CreateEvent', (req, res) => {
  console.log('Create event');
  console.log(req.body);
  let sql_query = `CALL create_event_admin('${req.body.event_name}','${req.body.description}','${req.body.price}','${req.body.date}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/UpdateCrop', (req, res) => {
  console.log('update_crop_admin');
  let sql_query = `CALL update_crop_admin ('${req.body.crop_id}','${req.body.crop_name}', '${req.body.quantity}', '${req.body.cost_price}', '${req.body.crop_status}', '${req.body.selling_price}', '${req.body.harvest_status}', '${req.body.discount}')`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/UpdateRaw_Material', (req, res) => {
  console.log('update_rawmaterial_admin');
  let sql_query = `CALL update_rawmaterial_admin('${req.body.raw_material_id}','${req.body.raw_material_name}', '${req.body.raw_material_quantity}', '${req.body.qty_threshold}', '${req.body.price}', '${req.body.raw_material_provider_id}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/UpdateRaw_Material_Provider', (req, res) => {
  console.log('update_rawmaterialprovider_admin');
  let sql_query = `CALL update_rawmaterialprovider_admin('${req.body.raw_material_provider_id}','${req.body.rmp_name}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/UpdateEvent', (req, res) => {
  console.log('update_event_admin');
  let sql_query = `CALL update_event_admin('${req.body.event_id}', ${req.body.event_name}','${req.body.description}','${req.body.price}','${req.body.date}','${req.body.total_count}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/DeleteCrop', (req, res) => {
  console.log('delete_crop_admin');
  let sql_query = `CALL delete_crop_admin('${req.body.crop_id}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/DeleteRaw_Material', (req, res) => {
  console.log('delete_rawmaterial_admin');
  let sql_query = `CALL delete_rawmaterial_admin('${req.body.raw_material_id}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/DeleteRaw_Material_Provider', (req, res) => {
  console.log('delete_rawmaterialprovider_admin');
  let sql_query = `CALL delete_rawmaterialprovider_admin('${req.body.raw_material_provider_id}');`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.get('/DeleteEvent', (req, res) => {
  console.log('delete_event_admin');
  let sql_query = `CALL delete_event_admin('${req.body.event_id}')`;
  pool.query(sql_query, (err, result) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end('Error in Data');
    }
    console.log(result);
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

module.exports = router;
