const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

// Database Connection
mongoose.connect(process.env.DATABASE_ATLAS).then(() => {
  console.log(`Database connection is successful`);
});

// Server Connection
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});
