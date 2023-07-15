if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require("./routes/index")
console.log("wrona to bos");
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASEURL)
const db = mongoose.connection
db.on("error", error => console.log(error))
db.once("open", () => console.log("połączona z bazą danych"))


app.use("/", indexRouter)

app.listen(process.env.PORT || 3000)