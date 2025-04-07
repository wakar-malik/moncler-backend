const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = 7700;
const DB_URL = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB_URL)
  .then((connect) => console.log("Database connected........ 🟢"))
  .catch((err) =>
    console.log(`Failed to connect to database ${err.message}........ 🔴`)
  );

app.listen(PORT, () =>
  console.log(`Server is listening at ${PORT}........ 🟢`)
);
