import express from "express";
import morgan from "morgan";

const app = express();

// MIDDLEWARES
app.use(morgan("dev"));

// VARIABLES
app.set("port", 8000);

// Inicia o servidor
app.listen(app.get("port"), () => {
  console.log(`WS escutando na porta ${app.get("port")}`);
});
