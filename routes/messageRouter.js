const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.messagesGET);

messageRouter.get("/new", messageController.newMessageGET);
messageRouter.post("/new", messageController.newMesagePOST);

module.exports = messageRouter;
