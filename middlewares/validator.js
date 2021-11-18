const { body, check} = require("express-validator");
const { Sequelize, Usuario } = require("../models");

const validaCamposCadastoUsuario = [
    check('nome').trim().notEmpty().withMessage("Não há nome").bail().isLength({min:3}).withMessage("Nome muito curto"),
    check('sobrenome').trim().notEmpty().withMessage("Não há sobrenome").bail().isLength({min:3}).withMessage("sobrenome muito curto"),
    check("email").trim().notEmpty().withMessage("Informar email").bail().isEmail().withMessage("Informar Email valido").custom(async (emailBody) => {
			const procuraEmail = await Usuario.findOne({
				where: {
					email: emailBody,
				},
			});
            if (!procuraEmail) {
                return emailBody;
            }
			if (procuraEmail.email) {
				return Promise.reject("E-mail já cadastrado");
			}
		}),
    check('senha').trim().notEmpty().withMessage("Informar senha de acesso").bail().isLength({min:6}).withMessage("pelo menos 6 caracteres"),
    check("confirmarSenha").trim().notEmpty().withMessage("Informar senha de acesso").bail().isLength({min:6}).withMessage("pelo menos 6 caracteres").
        custom((confirmarSenha, { req }) => {
                const senha = req.body.senha;
                if (senha !== confirmarSenha) {
                    throw new Error("As senhas não coincidem");
                } else {
                    return confirmarSenha;
                }
            })
        ]

module.exports = {
    validaCamposCadastoUsuario
}
