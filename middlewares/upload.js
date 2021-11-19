const multer = require("multer"); 
const path = require("path");

//Definindo local a salvar os rotulos e nome das imagens.
const storageAvatar = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/curriculo");
    },
    filename: function(req, file, cb) {
        //cb(null, file.fieldname+"-"+Date.now()+"-"+path.extname(file.originalname));
        cb(null, file.fieldname+"-"+Date.now()+"-"+user.sobrenome);
    }
});

const uploadAvatar = multer({storage:storageAvatar});


module.exports = {
    uploadRotulo
}