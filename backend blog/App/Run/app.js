const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


require('../Connection/connection');
require('../Route/route')(app);


app.listen(5000,()=>{
    console.log('server is running....');
    
})