import express from 'express';
const app = express();
const port = 4000;
import route from './routes/routes.js';
import path from 'path';
import connectDB from './connectDB/connectDB.js';
import bodyParser from 'body-parser';

//   >>>   Setup For Static  File

connectDB()

//   >>>   Body Parser

app.use(bodyParser.urlencoded({extended:false}));
 

//   >>>   Setup For Static  File

app.use(express.static(path.join(process.cwd(), 'public')))

//   >>>   Setup For EJS Template  File

app.set('view engine', 'ejs')
app.set('views', './views')

//   >>>   Routes

app.use('/', route);
   
app.listen(port, ()=>{
    console.log('Server is running at http://localhost:${port}')
})