const { default: mongoose } = require('mongoose');
const mmongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo: String,
    contenido: String,
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // nombre del modelo al que se relaciona
        required: true
    }
});

const Post = mongoose.model('Post', usuarioSchema);
module.exports = Post;