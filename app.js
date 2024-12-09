require("dotenv").config(); // Load environment variables

const express = require("express");
const app = express();
const messageRouter = require("./routes/messageRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
