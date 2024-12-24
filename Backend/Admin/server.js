const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mysql = require('mysql2')

// Used
app.use(express.json());
app.use(cors())



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@mysql!12#',
  database: 'testing'
})

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
// connection.connect()


app.post('/admin', function (req, res) {
  const { title, price } = req.body
  // console.log(req.body);

  if (title && price) {
    let sql = `INSERT INTO testing.products (title, price) VALUES ("${title}", "${price}")`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      res.send('done')
    });
  }
  console.log('Done');
})




app.get('/', (req, res) => {
  res.send('This is Admin Pannel')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})