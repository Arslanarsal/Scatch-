const express = require('express');
const db = require('./config/mongoose.connection.js');
const userRouter = require('./routes/user.router.js')
const ownerRouter = require('./routes/owner.router.js')
const productRouter = require('./routes/products.router.js')
const flash = require('connect-flash');
const expressSession = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')

require('dotenv').config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    secret: 'keyboard cat',
}))
app.use(flash())
app.use(cookieParser());;
app.use(express.static(path.join(__dirname , "public")))
app.set('view engine' , 'ejs')

app.use("/user", userRouter);
app.use("/owner", ownerRouter);
app.use("/product", productRouter);

app.listen(3000, () => {
    console.log("server is runing on post no 3000");
})




