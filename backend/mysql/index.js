// mysql/index.js

const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'phstore'
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MYSQL connected');
    }
});

const getAllProducts = (callback) => {
    const sql = 'SELECT * FROM product';

    connection.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const addProduct = (callback, productData) => {
    // Check if productData is defined and contains required fields
    if (!productData || !productData.name || !productData.price) {
        const err = new Error('Invalid product data');
        console.log(err);
        callback(err, null);
        return;
    }

    const { name, price, description, imageUrl } = productData;
    const sql = 'INSERT INTO product (name, price, description, imageUrl) VALUES (?, ?, ?, ?)';
    const values = [name, price, description || '', imageUrl || ''];  // Use empty strings as defaults if not provided

    connection.query(sql, values, function (err, results) {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};




const deleteProduct = (productId, callback) => {
    const sql = 'DELETE FROM product WHERE id = ?';

    connection.query(sql, [productId], function (err, results) {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const updateProduct = (productId, productData, callback) => {
    const { name, price } = productData;
    const sql = 'UPDATE product SET name = ?, price = ? WHERE id = ?';
    const values = [name, price, productId];

    connection.query(sql, values, function (err, results) {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = { getAllProducts, addProduct, deleteProduct, updateProduct };
