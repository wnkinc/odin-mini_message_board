const db = require("../db/queries");

async function messagesGET(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}
