// index.js (server)
const express = require('express');
const cors = require('cors');
const db = require('./mysql/index.js');

const port = 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/product', (req, res) => {
  db.getAllProducts((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.post('/api/product', (req, res) => {
    // Extract product data from the request body
    const productData = req.body;

    db.addProduct((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    }, productData); // Pass productData to addProduct
});


app.delete('/api/product/:id', (req, res) => {
  const productId = req.params.id;
  db.deleteProduct(productId, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.put('/api/product/:id', (req, res) => {
  const productId = req.params.id;
  // Assuming req.body contains the updated product data
  db.updateProduct(productId, req.body, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
