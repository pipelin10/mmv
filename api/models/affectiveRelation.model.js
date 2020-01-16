const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Photo = require('./photo.model');
const User = require('./user.model');

let AffectiveRelationSchema = new Schema({
    name: {type: String, required: true, max: 20 },
    last_name: {type: String,  max: 50},
    relationship:{type: String, 
                  enum: ['Paciente', 'Amigo', 'Amiga', 'Abuelo', 'Abuela', 'Mamá', 
                  'Papá', 'Hermano', 'Hermana', 'Novio', 'Novia', 'Esposo', 
                  'Esposa', 'Cuñado', 'Cuñada','Nieto', 'Nieta', 'Bisnieto', 'Bisnieta',
                  'Primo', 'Prima', 'Tia', 'Tio', 'Sobrino', 'Sobrina',
                  'Cuidador', 'Cuidadora', 
                  'Yerno', 'Nuera', 'Mascota', 'Artista', 
                  'Banda', 'Actividad', 'Lugar', 'Música', 'Restaurante', 'Comida', 'Otro gusto'],
                  required: true},
    photo:[{type: Schema.Types.ObjectId, ref: "Photo"}],
    user:{type: Schema.Types.ObjectId, ref: "User"}
});


// Export the model
module.exports = mongoose.model('AffectiveRelation', AffectiveRelationSchema);