const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// --- STEP 1: CONFIGURE CORS (Must be before routes) ---
const allowedOrigins = [
  'https://crafttechco.com',      
  'https://www.crafttechco.com',  
  'http://localhost:3000',
  'http://localhost:5173' // Added for Vite users just in case
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// --- STEP 2: COMMON MIDDLEWARE ---
app.use(express.json());

// --- STEP 3: ROUTES ---
app.use("/api/contact", require("./routes/Contact.routes"));

// --- STEP 4: SERVER START ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});