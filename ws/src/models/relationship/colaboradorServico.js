import mongoose from "mongoose";
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required:true
    },    
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
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


export default mongoose.model("ColaboradorServico", colaboradorServico);
