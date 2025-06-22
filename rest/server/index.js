require('dotenv').config() 
const express = require('express') 
const cors = require('cors'); 
const db = require('./db') 
const path = require('path')
const fileUpload = require('express-fileupload') 
const router = require('./routes/index')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
 
const PORT = process.env.PORT || 5000 
 
const app = express() 
 
app.use(cors()); 
app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))
app.use(fileUpload({})) 
app.use('/api',router)
app.use(bodyParser.json());

 
const start = async () => { 
    try { 
        await db.connect() 
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) 
    } catch (error) { 
        console.log(error) 
    }   
} 
 
start()