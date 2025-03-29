import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname+ "/public/index.html");
});

app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit",(req,res)=>{
  console.log(req.body);
});
app.get("/submit",(req,res)=>{
  res.send("hello");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
