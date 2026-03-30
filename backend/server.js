const express = require("express");
const mongoose = require ("mongoose");
const cors = require("cors");
require ("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect (process.env.MONGO_URI)
.then(() => console.log ("mongodb connected Successfully"))
.catch(err => console.log(err));
app.use("/api/feedback", require ("./routes/feedbackRoutes"));


const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})