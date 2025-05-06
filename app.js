const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const devisRoutes = require('./routes/routes');
const dotenv = require('dotenv');

dotenv.config();    

app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    console.log(req.method, req.url);
    console.log(req.body);
    console.log(new Date().toISOString());
    next();
});


app.use('/belage/devis', devisRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
