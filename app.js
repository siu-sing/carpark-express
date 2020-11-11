require('dotenv').config();
const express = require('express')
const app = express();
const methodOverride = require("method-override");

require('./lib/db');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(require('express-ejs-layouts'));

//routes
app.get("/",(req,res)=>{
    res.redirect("/carpark")
})

app.use("/carpark", require('./routes/carpark.routes'));

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))