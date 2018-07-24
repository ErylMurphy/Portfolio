// Get the express module.
const express = require('express');
// Create a new Express application (web server)
const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static("public"));

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567

const PORT = process.env.PORT || 4567;

// Start the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});

// app.get("/", (request, response) => {
//   // The `.send()` method returns HTML to the browser
//   response.send("hello world");
// });
app.get('/', (request, response) => {
  response.render("homepage");
});