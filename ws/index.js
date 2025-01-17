import express from "express";
import morgan from "morgan";
import cors from "cors";

import "./database.js";
const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// VARIABLES
app.set("port", 8000);

// Função assíncrona para importar as rotas
async function carregarRotas() {
  const salaoRoutes = await import("./src/routes/salao.routes.js");
  app.use("/salao", salaoRoutes.default); // Certifique-se de que a exportação seja feita com "default" se estiver utilizando ES Modules.
}

// Carrega as rotas antes de iniciar o servidor
carregarRotas().then(() => {
  // Inicia o servidor
  app.listen(app.get("port"), () => {
    console.log(`WS escutando na porta ${app.get("port")}`);
  });
});
