import mongoose from "mongoose";
const Schema = mongoose.Schema;

const agendamento = new Schema({
    
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required:true
    },    
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required:true
    }, 
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});


export default mongoose.model("Agendamento", agendamento);
