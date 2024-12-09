const db = require("../db/queries");

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New" },
];

async function messagesGET(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Messageboard",
    links: links,
    messages: messages,
  });
}

async function newMessageGET(req, res) {
  res.render("form", {
    title: "New Message",
    links: links,
  });
}

async function newMesagePOST(req, res) {
  const { message, name } = req.body;
  await db.insertMessage(message, name);
  res.redirect("/");
}

module.exports = {
  messagesGET,
  newMessageGET,
  newMesagePOST,
};
