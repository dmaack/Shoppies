const express = require('express');
const connectDB = require('./config/db')

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Shoppies API'}))

// Routes
app.use('/api/nominations', require('./routes/nominations'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`))