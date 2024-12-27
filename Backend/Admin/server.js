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


app.post('/add', function (req, res) {
  const { title, price, description, image } = req.body
  // console.log(req.body);

  //   if (title && price) {
  //     // let sql = `INSERT INTO testing.products (title, price, desc, image) VALUES ("${title}", "${price}","${desc}","${image}" )`;
  //     connection.query(sql, function (err, result) {
  //       if (err) throw err;
  //       res.send('done')
  //     });
  //   }
  //   console.log('Done');

  try {
    let sql = `INSERT INTO testing.products (title, price, description, image) VALUES (?,?,?,?)`;
    connection.query(sql, [title, price, description, image], (err) => {
      if (err) {
        return res.status(400).json({ mesage: "User already exists or an error occurred", error: err.message })
      }
      res.status(201).json({ message: "Successfully Product added" })
    })
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: err.message })
  }

})

app.delete('/delete/:id', function (req, res) {
  const { id } = req.params;

  const sql = `DELETE FROM testing.products WHERE id = ?`;
  console.log(sql);


  connection.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to delete product", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  });
});

app.get('/search/:id', function (req, res) {
  const { id } = req.params;

  const sql = `select * from testing.products where id = ?`;
  connection.query(sql, [id], (err, result) => {
    console.log(result[0],"This is Result Products Data");
    if (err) {
      return res.status(500).json({ message: "Failed to get product", error: err.message });
    }
    if (result.length > 0) {
      return res.status(200).json(result);
    }
    
    else {
      return res.status(400).json({ message: "Product Not Found" })
    }
    // res.status(200).json({proQuery});
  });
  // const proQuery = `select * from testing.products`
  // const productsData = [title, price, description, image];
  // connection.query(proQuery, productsData, (err, result) => {
  //   if (err) {
  //     return res.status(500).json({ message: "Product Not found", error: err.message });
  //   }
  //   if (result) {
  //     res.status(200).json(productsData)
  //   }
  // })
});




app.get('/', (req, res) => {
  res.send('This is Admin Pannel')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})