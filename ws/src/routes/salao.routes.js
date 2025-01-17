import { Router } from "express";
import Salao from "../models/salao.js";
import Servico from "../models/servico.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const salao = await new Salao(req.body).save();
    res.json({ salao });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get("/servicos/:salaoId", async (req, res) => {
  try {
    const { salaoId } = req.params;
    const servicos = await Servico.find({ salaoId, status: "A" }).select(
      "_id titulo"
    );

    res.json({
      servicos: servicos.map((s) => ({ label: s.titulo, value: s._id })),
    });
    
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

export default router;
