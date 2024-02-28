const cors = require("cors");
const express = require("express");
const app = express();

require("dotenv").config();

let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes');
let shotRoutes = require('./routes/shotRoutes')


// parse requests of content-type -application/json
app.use(express.json());

app.use(cors());

app.use('/api/users', userRoutes);

app.use('/api/shots', shotRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});