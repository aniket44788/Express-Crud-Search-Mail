require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 8000;
const Router = require("./Crud-Operations/router")
const create = require("./Crud-Operations/create")
const deleteRouter = require("./Crud-Operations/delete")
const app = express();
const cors = require("cors");
const main = require("./Database/Database")

app.use(cors());
app.use(express.json())
app.use("/create", create)
app.use("/router", Router)
app.use("/delete", deleteRouter)
// app.use("/find", Router)

main()

app.listen(port, () => {
  console.log(" server is running ");
});