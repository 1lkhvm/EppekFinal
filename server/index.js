const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");



// const userRoute = require("./routes/user");
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");


dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connection Successful!!!")).catch((err) => { console.log(err) });



app.use("/api/auth/", authRoute)




// app.use("/api/users", verify ,  userRoute);
// app.use("/api/products", verify , productRoute);
// app.use("/api/carts", verify , cartRoute);
// app.use("/api/orders", verify , orderRoute);

// 



app.listen(process.env.PORT || 5000, () => {
    console.log("server is running")
});