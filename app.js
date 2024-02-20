const express = require('express');
const app = express()
const path = require('path')
const port = 3300;

app.use(express.static('public'))

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname, './views'))


const indexRoutes = require('./routes/index.routes')
const menuRoutes = require('./routes/menu.routes')

app.use("/", indexRoutes)
app.use("/menu", menuRoutes)


app.listen(port,() => console.log(`http://localhost:${port}`))