const express = require("express");
const app = express();
const messageRouter = require("./routes/messageRouter");
// const path = require("path");

// const assetsPath = path.join(__dirname, "public");
// app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter);

// app.set("views", path.join(__dirname, "views"));

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];
// const links = [
//   { href: "/", text: "Home" },
//   { href: "/new", text: "New" },
// ];

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "Mini Messageboard",
//     messages: messages,
//     links: links,
//   });
// });

// app.get("/new", (req, res) => {
//   res.render("form", {
//     links: links,
//   });
// });

// // Handle the form submission (POST request)
// app.post("/new", (req, res) => {
//   // Get data from the form submission
//   const { name, message } = req.body;

//   // Add new message to the messages array
//   const newMessage = {
//     text: message,
//     user: name,
//     added: new Date(),
//   };

//   messages.push(newMessage); // Push the new message to the array

//   // Redirect back to the main page to display the updated messages
//   res.redirect("/"); // Redirect to the home page
// });

// // message details page
// app.get("/messages/:id", (req, res) => {
//   const messageId = req.params.id;
//   console.log("Message ID:", messageId); // Log the ID to see what you're getting
//   const message = messages[messageId];

//   if (message) {
//     res.render("messageDetails", { message: message, links: links });
//   } else {
//     res.status(404).send("Message not found");
//   }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
