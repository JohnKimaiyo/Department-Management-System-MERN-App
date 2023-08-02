const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// connect to mysql

const mysql = require("mysql");

app.get("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});

const fileUpload = require("express-fileupload");
const far = require("fs");
app.use(fileUpload());
app.use("/Photos", Epress.static(_firname + "/Photos"));

app.listen(5000, () => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to DB");
  });
});

//  API routes
app.get("/", (request, response) => {
  response.sebd(`<h1>Server is Live</h1>`);
});

app.get("/api/department", (request, response) => {
  const query = `SELECT * from dbo.Department`;
  connecton.query(query, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.send(rows);
  });
});

// send data to db
app.post("/api/department", (request, response) => {
  const query = `INSERT into dbo.Department
    (DepartementName)
    VALUE (?);
    `;

  const values = [request.body["DepartmentName"]];

  connecton.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.json("Addeed succefully ");
  });
});

// update data on database
app.put("/api/department", (request, response) => {
  const query = `UPDATE  dbo.Department
    set DepartmentName ? where DepartmentId=?`;
  const values = [request.body["DepartmentName"], request.body["DepartmentId"]];
  connecton.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.json("Updated  succefully ");
  });
});

// delete data on database
app.delete("/api/department", (request, response) => {
  const query = `DELETE   dbo.Department
      set DepartmentName ? where DepartmentId=?`;
  const values = [parseIn(request.params.id)];
  connecton.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.json("Deleted  succefully ");
  });
});

//  get employee
app.get("/api/employee", (request, response) => {
  const query = `SELECT * from dbo.Employee`;
  connecton.query(query, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.send(rows);
  });
});

// send data to db
app.post("/api/employee", (request, response) => {
  const query = `INSERT into dbo.Employee
      (DepartementName,Department,DateOfJoining,PhotoFileName)
      VALUE (?);
      `;

  const values = [
    request.body["EmployeeName"],
    request.body["Department"],
    request.body["DateofJoining"],
    request.body["DepartmentName"],
  ];

  connecton.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.json("Addeed succefully ");
  });
});

// update data on database
app.put("/api/employee", (request, response) => {
  const query = `UPDATE  dbo.Employee
      set EmployeeName ?
      Department=?
      DateOfJoining=?
      PhotoFileName=?
      where EmployeId=?`;
  const values = [
    request.body["EmployeeName"],
    request.body["Department"],
    request.body["DateOfJoiningg"],
    request.body["PhotoFileName"],
    request.body["EmployeeId"],
  ];
  connecton.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.json("Updated  succefully ");
  });
});

// delete data on database
app.delete("/api/employee", (request, response) => {
  const query = `DELETE   dbo.Employee
        set EmployeeName ? where EmployeeId=?`;
  const values = [parseIn(request.params.id)];
  connecton.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Failed");
    }
    response.json("Deleted  succefully ");
  });
});

app.post("/api/employee/savefile", (request, response) => {
  fs.writeFile(
    "./Photos/" + request.files.file.name,
    request.files.file.data,
    function (err) {
      if (err) {
        return;
        console.log(err);
      }

      response.json(request.files.file.name);
    }
  );
});
