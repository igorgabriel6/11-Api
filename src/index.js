import express from "express";      // Requisição do pacote do express
import dotenv from "dotenv";
dotenv.config();

import roteadorUsuario from "./routes/usuario.js";

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta
app.use(express.json());

app.use(roteadorUsuario);

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    
    nome: "Ígor Gabriel Sena Matos",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

//index.js



