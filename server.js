const mongoose = require("mongoose");
const app = require("./app");

const PORT = 7700;

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
