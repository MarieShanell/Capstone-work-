const express = require("express");
const app = express();

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "All good over here" }));
});

app.listen(4040, () => console.log("Listening on port 4040"));
