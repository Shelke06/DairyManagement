// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const farmerRoutes = require('./routes/farmerRoutes');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/farmers', farmerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
