var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);  //res.json?
    });
  },
  insertOne: function(table, tableCol, newValue) {
    var queryString = "INSERT INTO ? (?) VALUES (??)";
    console.log(queryString);
    connection.query(queryString, [table, tableCol, newValue], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne(): function(table, column, updatedValue, condition) {
    var queryString = "UPDATE ?? SET ?=?? WHERE ?";

    connection.query(queryString, [table, column, updatedValue, condition], function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;

