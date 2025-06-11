const express = require('express');
const db = require('./config/mongoose.connection.js');
const userRouter = require('./routes/user.router.js')
const ownerRouter = require('./routes/owner.router.js')
const productRouter = require('./routes/products.router.js')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/user", userRouter);
app.use("/owner", ownerRouter);
app.use("/product", productRouter);

app.listen(3000, () => {
    console.log("server is runing on post no 3000");
})




