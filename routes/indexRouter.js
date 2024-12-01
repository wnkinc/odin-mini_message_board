// routes/indexRouter.js
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("All indexs"));
indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`Index ID: ${indexId}`);
});

module.exports = indexRouter;
