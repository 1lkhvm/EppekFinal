const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");





dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connection Successful!!!")).catch((err) => { console.log(err) });





const userRoute = require("./routes/user");
//////////////////////////////////////////////////////////////////////
const productbreadRoute = require("./routes/productbread");
const messageRoute = require("./routes/message");
const productbreakfastRoute = require("./routes/productbreakfast");
const productcakeRoute = require("./routes/productcake");
const productfermaRoute = require("./routes/productferma");
const productpastaRoute = require("./routes/productpasta");
const millRoute = require("./routes/mill")

//////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////
app.use("/api/auth/", authRoute)
app.use("/api/message", messageRoute);
app.use("/api/mill", millRoute);
app.use("/api/productsbread", productbreadRoute);
app.use("/api/productbreakfast", productbreakfastRoute);
app.use("/api/productcake", productcakeRoute);
app.use("/api/productferma", productfermaRoute);
app.use("/api/productpasta", productpastaRoute);
//////////////////////////////////////////////////////////////////////


cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");


app.use("/api/users", userRoute);




app.use("/api/carts", cartRoute);
// app.use("/api/orders", verify , orderRoute);





app.listen(process.env.PORT || 5000, () => {
    console.log("server is running")
});