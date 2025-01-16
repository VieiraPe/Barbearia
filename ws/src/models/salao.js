import mongoose from "mongoose";
const Schema = mongoose.Schema;

const salao = new Schema({
  nome: {
    type: String,
    required: [true, "Nome é obrigatório"],
  },
  foto: String,
  capa: String,
  email: {
    type: String,
    required: [true, "Nome é obrigatório"],
  },
  senha: String,
  telefone: String,
  endereço: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
  },
  geo: {
    tipo: String,
    coordinates: Arrays,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

salao.index({ geo: "2dsphere" });

export default mongoose.model("Salao", salao);
