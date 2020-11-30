// SJSU CMPE 226 Fall 2020 TEAM3
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../mysqlDB.js');

router.post('/customer', (req, res) => {
  console.log('Login');
  var type = req.body.type;
  let sql_query = `CALL get_user('${req.body.email_id}');`;
  /*if (type === 0) {
    sql_query = `CALL get_user('${req.body.email_id}');`;
  }*/
  if (type === 1) {
    sql_query = `CALL get_employee('${req.body.email_id}');`;
  }

  db.query(sql_query, async (err, result) => {
    if (err) {
      console.log('Error:' + err);
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.send('Database Error');
    }
    if (result && result.length > 0 && result[0][0].status) {
      let isValidPassword = false;
      try {
        isValidPassword = await bcrypt.compare(
          req.body.password,
          result[0][0].password
        );
        if (isValidPassword === true) {
          req.session.user = req.body.email_id;
          res.cookie('cookie', 'admin', {
            maxAge: 900000,
            httpOnly: false,
            path: '/',
          });
          res.writeHead(200, {
            'Content-Type': 'text/plain',
          });
          res.end(JSON.stringify(result[0][0]));
        } else {
          res.writeHead(401, {
            'Content-Type': 'text/plain',
          });
          res.end('INCORRECT_PASSWORD');
        }
      } catch (err) {
        console.log('Error in encryption:');
        console.log(err);
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Error in encrypting password!!');
      }
    } else {
      console.log('No customer found');
      res.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      res.end('NO_CUSTOMER');
    }
  });
});

/*

router.post("/farm", (req, res) => {
  console.log("Farm Employee login");
  let sql_query = `CALL get_farm('${req.body.email_id}');`;
  db.query(sql_query, async (err, result) => {
    console.log("result:" + result);
    if (err) {
      console.log("Error:" + err);
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Error");
    }
    if (result && result.length > 0 && result[0][0].status) {
      let isValidPassword = false;
      try {
        isValidPassword = await bcrypt.compare(
          req.body.password,
          result[0][0].password
        );
        if (isValidPassword === true) {
          req.session.user = req.body.email_id;
          res.cookie("cookie", "admin", {
            maxAge: 900000,
            httpOnly: false,
            path: "/",
          });
          // ***************** Need to change for FARM accordingly ******************
          let restaurantObject = {
            customer_id: result[0][0].restaurant_id,
            cust_name: result[0][0].restaurant_name,
            email_id: result[0][0].email_id,
            password: result[0][0].password,
            login_type: 1,
          };
          res.writeHead(200, {
            "Content-Type": "text/plain",
          });
          res.end(JSON.stringify(restaurantObject));
        } else {
          res.writeHead(401, {
            "Content-Type": "text/plain",
          });
          res.end("INCORRECT_PASSWORD");
        }
      } catch (err) {
        console.log("Error in encryption:");
        console.log(err);
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error in encrypting password!!");
      }
    } else {
      console.log("No restaurant found");
      res.writeHead(401, {
        "Content-Type": "text/plain",
      });
      res.end("NO_CUSTOMER");
    }
  });
});
*/

module.exports = router;
