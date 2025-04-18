import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("./views/index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
