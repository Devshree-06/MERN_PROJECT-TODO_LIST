//creating express server for database
import express from 'express';
import cors from 'cors';

import Routes from './routers/route.js';

import Connection from './database/db.js';


const myapp=express();

myapp.use(cors());

myapp.use(express.json({extended : true}));
myapp.use(express.urlencoded({extended : true}));

myapp.use('/',Routes);

const PORT=8000;

Connection();


myapp.listen(PORT,() => console.log(`Server is running on port ${PORT}`));