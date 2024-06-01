const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
let app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "u591256487_abhishek",
  password: "Medical@123",
  database: "u591256487_contact",
});

db.connect((err) => {
  if (err) console.log("Not Connected to DB",err);
  else {
    console.log("Database connecte");
  }
});

// Student Signup//
app.post("/StudentSignUp", (req, res) => {
  let name = req.body.name;
  let CLASS = req.body.Class;
  let SUBJECT = req.body.Subject;
  let FEE = req.body.Approx_Fee;
  let ADDRESS = req.body.location;
  let Contact = req.body.contact;
  let Email = req.body.email;
  let Board = req.body.board;
  let password = req.body.password;

  let value = [[ name, CLASS, SUBJECT, FEE, ADDRESS, Contact, Email, Board, password]];

  let sql =
    "insert into Student( name, CLASS,SUBJECT, FEE, ADDRESS, Contact,Email,Board, password ) values ?";

    db.query(sql, [value], (err, result) => {
      if (err) {
        console.error("Error inserting data: ", err);
        res.status(500).send("There was an error!");
      } else {
        console.log("Form submitted successfully");
        res.send("Form submitted successfully!");
      }
    });
});

// Feaching Student details
app.get("/StudentProfile", (req, res) => {
    let sql = "SELECT * FROM Student";
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ message: "Internal server error" });
      } else {
        console.log("Data fetched successfully:", result);
        return res.status(200).json(result);
      }
    });
  });
  //Fetching Teacher details///
  app.get('/TeacherProfile', (req, res) => {
    const sql = 'SELECT * FROM Teacher';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data: ' + err);
        res.status(500).send('Error fetching data');
      } else {
        res.json(result);
      }
    });
  });
  //Teacher signup///
  app.post('/TeacherSignup', (req, res) => {
    const Name = req.body.name;
    const Subject = req.body.subject;
    const Email = req.body.email;
    const Contact = req.body.contact;
    const Class = req.body.class;
    const Mode = req.body.mode;
    const Qualification = req.body.qualification;
    const Experience = req.body.experience;
    const Gender = req.body.gender;
    const Remark = req.body.remarks;
    const password = req.body.password;
    
    let value = [[Name,Subject,Email,Contact,Class,Qualification,Experience,Mode,Gender,Remark,password]];

    let sql = 'insert into Teacher(ID,Name,Subject,Email,Contact,Class,Qualification,Experience,Mode,Gender,Remark,password) values ?';


    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("Form submitted")
        }
    })
  
    res.send('Form submitted successfully!');
  });


  //Teacher signin///
  app.post('/TeacherSignin',(req, res) => {
    let email = req.body.email
    let password = req.body.password

    let sql = "select * from Teacher where email = ? and password = ?"
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).send('Error querying the database');
        return;
      }
  
      if (result.length > 0) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
})





  // Student signin
  app.post('/StudentSignin',(req, res) => {
    let email = req.body.email
    let password = req.body.password

    let sql = "select * from Student where email = ? and password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err)  {
          res.status(500).send('Error querying the database');
          console.error('Database query error:', err);
          return;
            }
            if (result.length > 0) {
              res.send(true);
            } 
            else {
              res.send(false);
            }
        
    })
})



//  inquiry 
app.post('/inquiries', (req, res) => {
  const { name, contact, profession,inquiry } = req.body;

  db.query('INSERT INTO inquiries (name, contact, profession,inquiry) VALUES (?, ?, ?,?)', [name, contact, profession,inquiry], (error, results, fields) => {
    if (error) {
      console.error('Error inserting inquiry: ' + error);
      res.status(500).send('Error inserting inquiry');
    } else {
      console.log('Inquiry inserted with ID: ', results.insertId);
      res.status(201).send('Inquiry inserted successfully');
    }
  });
});


app.listen(5000, function () {
  console.log("Server is running on port of 5000");
});