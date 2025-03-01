require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 8000;
const Router = require("./router")
const create = require("./create")
const deleteRouter = require("./delete")
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");


app.use(cors());
app.use(express.json())
app.use("/create", create)
app.use("/router", Router)
app.use("/delete", deleteRouter)
// app.use("/find", Router)

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://darkpanda44788:PCRLWKuyx4Vguo4y@cluster0aa.zxb7f.mongodb.net/DARKPANDA?retryWrites=true&w=majority&appName=Cluster0aa"
  );
  console.log(" database connected ");
}

app.listen(port, () => {
  console.log(" server is running ");
});