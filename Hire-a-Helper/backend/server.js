const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const registerRoute = require("./routes/register");
const verifyOtpRoute = require("./routes/verifyOtp");
const loginRoute = require("./routes/login");
const addtaskRoute=require("./routes/addTask")
const myTasksRoute=require("./routes/myTask")
const path = require("path");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/add-tasks", addtaskRoute);
app.use("/api/auth/register", registerRoute);
app.use("/api/auth/verify-otp", verifyOtpRoute); 
app.use("/api/auth/login", loginRoute);
app.use("/my-tasks", myTasksRoute);
app.use('/api/settings', require('./routes/settings'));

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});