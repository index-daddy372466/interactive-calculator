require('dotenv').config()
const pool = require('./db.js').pool
const middleware = require('../lib/middleware.js')
const routes = require('../lib/routes.js')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
let PORT = !process.env.PORT?3442:process.env.PORT
const index = '/public'
middleware(app,cors,express,bodyParser)
routes(app,pool)
app.listen(PORT,()=>{
    console.log('you are listening on port '+ PORT + ' my man!')
})