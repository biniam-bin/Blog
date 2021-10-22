const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
app.use(express.json())

//Routes import
const authRoute = require("./routes/auth")


//dbConnection
mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => {
  console.log(`********!!    Connected to the db     !!*********`);
  console.log("**************************************");
  console.log("**************************************");
    }).catch((error) => {
    console.log(`Cant connect to db because: ${error.message}`)
})

//routes
app.use("/api/auth", authRoute)

//listen to port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("**************************************");
  console.log("**************************************");
  console.log(`********!!SERVER RUNNING ON PORT: ${PORT}!!*********`);
});
