import mongoose from "mongoose";
const Schema = mongoose.Schema;

const servico = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Salao',
    required:true
  },
  titulo: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  comissao: {
    type: Number, // % de comissao sobre o preço
    required: true
  },
  duracao: {
    type: Number, // Duração em minutos
    required: true
  },
  recorrencia: {
    type: Number, // Periodo de rafação do serviço em dias
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['A', 'I', 'E'],
    default: 'A',
    required: [true],
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model("Servico", servico);
