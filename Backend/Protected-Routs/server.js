const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const mysql = require('mysql')
const cors = require('cors');

// const db = require('./db');

const authenticateToken = require('./authMiddleware');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const PORT = "3000"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


console.log(process.env, 'This is Env');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@mysql!12#',
  database: 'testing'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});


// Register Route

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sqlquery = 'INSERT INTO testing.users (name,email,password) VALUES (?, ?,?)';
    db.query(sqlquery, [name, email, hashedPassword], (err) => {
      if (err) {
        return res.status(400).json({ message: 'User already exists or an error occurred', error: err.message });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error', error: err.message });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);  // Corrected here
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const payload = { userId: user.id, name: user.name };  // Corrected here
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  });
});


// Protected Route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'You have accessed protected data!', user: req.user });
});

// Another Example of a Protected Route
app.get('/profile', authenticateToken, (req, res) => {
  const sql = 'SELECT id, name FROM users WHERE id = ?';
  db.query(sql, [req.user.userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error', error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    res.json({ profile: results[0] });
  });
});




app.get('/', (req, res) => {
  res.send('Hello world This is Protected Routes')
})
console.log(process.env.JWT_SECRET_KEY, 'This is Env File');

// Start the server
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

