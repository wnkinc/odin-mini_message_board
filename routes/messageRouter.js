const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.messagesGET);

messageRouter.get("/new", messageController.newMessageGET);
messageRouter.post("/new", messageController.newMessagePOST);

messageRouter.get("/:id/details", messageController.messageDetailsGET);

module.exports = messageRouter;
