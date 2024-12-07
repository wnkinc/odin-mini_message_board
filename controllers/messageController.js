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

module.exports = {
  messagesGET,
};
