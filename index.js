import express from "express";

const app = express();
app.use(express.json());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
  });
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server listening on ${PORT}`);
});
