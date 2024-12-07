const { Router } = require("express");
const messageController = require("../controllers/newController");
const messageRouter = Router();

messageRouter.get("/", messageController.messagesGET);

module.exports = messageRouter;
