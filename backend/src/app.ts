import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const responseString: string = "Hello World";
  res.send(responseString);
});

app.listen(port, () => {
  return console.log(`Express server is listening at http://localhost:${port}`);
});
