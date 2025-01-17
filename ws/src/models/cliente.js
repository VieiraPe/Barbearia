import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cliente = new Schema({
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
  documento: {
    tipo: {
        type:String,
        enum:['individual', 'corporation'],
        required: true
    },
    numero: {
        type:String,
        required: true
    }
  },
  endereço: {
    cidade: {
        type:String,
        required:true
    },
    uf: {
        type:String,
        required:true
    },
    cep: {
        type:String,
        required:true
    },
    numero: {
        type:String,
        required:true
    },
    pais: {
        type:String,
        required:true
    },
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("Cliente", cliente);
