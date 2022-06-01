import 'dotenv/config'

import usuariocontrolleer from './controller/usuariocontroller.js'
import filmecontroller from './controller/filmecontroller.js'
import express from 'express'
import cors from 'cors'

const server = express ();
server.use(cors());
server.use(express.json());

// liberar arquivos da storage
server.use('/storage/capasFilmes', express.static('storage/capasFilmes'));

// configuração dos endpoints
server.use(usuariocontrolleer);
server.use(filmecontroller)


server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));