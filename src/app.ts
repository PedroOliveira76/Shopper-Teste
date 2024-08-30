require('dotenv').config();

import measureRouter from "./router/measureRouter";
import { Response, Request } from "express";
import { Router } from "express";
import { erroHandler } from "./middleware/erroHandler";

const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const router = Router()
const app = express();
const PORT = process.env.PORT

router.get('/', (req:Request, res:Response)=>{
    res.send({message:'Hello World'})
})

app.use(express.json())
app.use(cors())
app.use('/api', measureRouter),
app.use('/', router)
app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
      },
    },
  }));

app.use(erroHandler)
app.listen(PORT, ()=>{
    console.log('Servidor iniciado com sucesso');
})