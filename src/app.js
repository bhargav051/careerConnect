const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send("User Info");
});

app.post("/user", (req, res) => {
  // saving the data
  res.send("User Data saved successfully");
});

app.delete("/user", (req, res) => {
  res.send("User Data deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777!!");
});
