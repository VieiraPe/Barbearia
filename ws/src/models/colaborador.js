import mongoose from "mongoose";
const Schema = mongoose.Schema;

const colaborador = new Schema({
  nome: {
    type: String,
    required: [true],
  },
  telefone: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  senha: {
    type: String,
    required: [true],
  },
  foto: {
    type: String,
    required: [true],
  },
  dataNascimento: {
    type: String,
    enum: ['M', 'F'],
    required: [true],
  },
  sexo: {
    type: String,
    required: [true],
  },
  status: {
    type: String,
    enum: ['A', 'I'],
    default: 'A',
    required: [true],
  },
  contaBancaria: {
    titular: {
        type: String,
        required: true
    },
    cpfCnpj: {
        type: String,
        required: true
    },
    banco: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    agencia: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    dv: {
        type: String,
        required: true
    }
  },
  recipientId: {
    type: String,
    required: true
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("colaborador", colaborador);
