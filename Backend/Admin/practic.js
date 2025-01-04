// app.get('/search/:id', function (req, res) {
//   const { id } = req.params;

//   const sql = `select * from testing.products where id = ?`;
//   connection.query(sql, [id], (err, result) => {
//     console.log(result[0],"This is Result Products Data");
//     if (err) {
//       return res.status(500).json({ message: "Failed to get product", error: err.message });
//     }
//     if (result.length > 0) {
//       return res.status(200).json(result);
//     }

//     else {
//       return res.status(400).json({ message: "Product Not Found" })
//     }
//     // res.status(200).json({proQuery});
//   });
//   // const proQuery = `select * from testing.products`
//   // const productsData = [title, price, description, image];
//   // connection.query(proQuery, productsData, (err, result) => {
//   //   if (err) {
//   //     return res.status(500).json({ message: "Product Not found", error: err.message });
//   //   }
//   //   if (result) {
//   //     res.status(200).json(productsData)
//   //   }
//   // })
// });


console.log('differ');


// app.post('/add', function (req, res) {
//     const { title, price, description, image } = req.body
    // console.log(req.body);
  
    //   if (title && price) {
    //     // let sql = `INSERT INTO testing.products (title, price, desc, image) VALUES ("${title}", "${price}","${desc}","${image}" )`;
    //     connection.query(sql, function (err, result) {
    //       if (err) throw err;
    //       res.send('done')
    //     });
    //   }
    //   console.log('Done');
  