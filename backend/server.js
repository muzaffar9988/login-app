const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded user (no database)
const USER = {
  email: "test@gmail.com",
  password: "123456",
};

// Login API
app.post("/api/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // Check credentials
  if (email === USER.email && password === USER.password) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
