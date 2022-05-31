import 'dotenv/config'

import usuariocontrolleer from './controller/usuariocontroller.js'
import express from 'express'
import cors from 'cors'

const server = express ();
server.use(cors());
server.use(express.json());

// configuração dos endpoints
server.use(usuariocontrolleer);


server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));