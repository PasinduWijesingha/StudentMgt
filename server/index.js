import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student';

const app = express();

app.use('/students',studentRoutes);

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors()); 

const CONNECTION_URL = 'mongodb+srv://skillbuilt:12345@skillbuilt.v441t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5002;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is up on PORT : ${PORT}`)
)).catch((err)=> console.log(err.message)); 


