const {body, check} = require("express-validator");

const validaCamposCadastoUsuario = [
    check('nome').trim().notEmpty().withMessage("Não há nome").bail().isLength({min:3}).withMessage("Nome muito curto"),
    check('sobrenome').trim().notEmpty().withMessage("Não há sobrenome").bail().isLength({min:3}).withMessage("sobrenome muito curto"),
    check("email").trim().notEmpty().withMessage("Informar email").bail().isEmail().withMessage("Informar Email valido"),
    check('senha').trim().notEmpty().withMessage("Informar senha de acesso").bail().isLength({min:6}).withMessage("pelo menos 6 caracteres")
];

module.exports = {
    validaCamposCadastoUsuario
}
