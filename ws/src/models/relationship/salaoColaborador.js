import mongoose from "mongoose";
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required:true
    },
    colaboradorId: 
    {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required:true
    },    
    status: {
        type: String,
        enum: ['A', 'I'],
        default: 'A',
        required: [true],
      },
   
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});


export default mongoose.model("SalaoColaborador", salaoColaborador);
