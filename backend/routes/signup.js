const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../mysqlDB.js");

router.post("/customer", async (req, res) => {
  console.log("POST customer");
  var encryptedPassword;
  try {
    encryptedPassword = await bcrypt.hash(req.body.password, 12);

    let sql_query = `CALL register_customer('${req.body.cust_name}', '${req.body.email_id}', '${encryptedPassword}');`;
    pool.query(sql_query, (err, result) => {
      if (err) {
        console.log("Error:");
        console.log(err);
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error in Data");
      }
      if (
        result &&
        result.length > 0 &&
        result[0][0].status === "CUSTOMER_ADDED"
      ) {
        console.log("Success:");
        console.log(result);
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end(result[0][0].status);
      } else if (
        result &&
        result.length > 0 &&
        result[0][0].status === "CUSTOMER_EXISTS"
      ) {
        console.log("Already exists:");
        console.log(result);
        res.writeHead(401, {
          "Content-Type": "text/plain",
        });
        res.end(result[0][0].status);
      }
    });
  } catch (err) {
    console.log("Error with encryption");
    console.log(err);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Error in encrypting password!!");
  }
});

module.exports = router;