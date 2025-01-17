import express from "express";
import Arquivo from "../models/arquivo.js";
import Servico from "../models/servico.js";
import Busboy from "busboy";
import aws from "../services/aws.js";

const router = express.Router();

router.post("/", async (req, res) => {
  let busboy = Busboy({ headers: req.headers });
  let salaoId, servico;
  let arquivos = [];
  let errors = [];

  busboy.on("field", (fieldname, value) => {
    if (fieldname === "salaoId") salaoId = value;
    if (fieldname === "servico") servico = value;
  });

  busboy.on("file", (fieldname, file, filename) => {
    console.log(`Arquivo recebido: ${filename}`);
  });

  busboy.on("file", async (file, filename) => {
    try {
      const nameParts = filename.split(".");
      const fileName = `${new Date().getTime()}.${nameParts[nameParts.length - 1]}`;
      const path = `servicos/${salaoId}/${fileName}`;

      const response = await aws.uploadToS3(file, path);

      if (response.error) {
        errors.push({ error: true, message: response.message });
      } else {
        arquivos.push(path);
      }
    } catch (err) {
      errors.push({ error: true, message: err.message });
    }
  });

  busboy.on("finish", async () => {
    try {
      if (errors.length > 0) {
        res.status(400).json(errors[0]);
        return;
      }

      // Criar Serviço
      let jsonServico = JSON.parse(servico);
      const servicoCadastrado = await Servico(jsonServico).save();

      // Criar Arquivo
      const arquivosData = arquivos.map((arquivo) => ({
        referenciaId: servicoCadastrado._id,
        model: "Servico",
        caminho: arquivo,
      }));

      await Arquivo.insertMany(arquivosData);

      res
        .status(201)
        .json({ servico: servicoCadastrado, arquivos: arquivosData });
    } catch (err) {
      res.status(500).json({ error: true, message: err.message });
    }
  });

  req.pipe(busboy);
});

export default router;
