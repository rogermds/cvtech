const { body, check} = require("express-validator");
const { Sequelize, Usuario } = require("../models");

const validaCamposCadastroUsuario = [
    check('nome').trim().notEmpty().withMessage("Digite seu nome corretamente!").bail().isLength({min:3}).withMessage("Nome muito curto!"),
    check('sobrenome').trim().notEmpty().withMessage("Digite seu sobrenome corretamente!").bail().isLength({min:3}).withMessage("Sobrenome muito curto!"),
    check('celular').trim().notEmpty().withMessage("Digite seu celular corretamente!").bail().isLength({min:10}).withMessage("Numero muito curto!"),
    check("email").trim().notEmpty().withMessage("Digite seu email!").bail().isEmail().withMessage("Digite um email válido!").custom(async (emailBody) => {
			const procuraEmail = await Usuario.findOne({
				where: {
					email: emailBody,
				},
			});
            if (!procuraEmail) {
                return emailBody;
            }
			if (procuraEmail.email) {
				return Promise.reject("E-mail já cadastrado!");
			}
		}),
    check('senha').trim().notEmpty().withMessage("Digite sua senha corretamente!").bail().isLength({min:6}).withMessage("A senha deve conter no mínimo 6 caracteres!"),
    check("confirmarSenha").trim().notEmpty().withMessage("Digite sua senha corretamente!").bail().isLength({min:6}).withMessage("A senha deve conter no mínimo 6 caracteres!").
        custom((confirmarSenha, { req }) => {
                const senha = req.body.senha;
                if (senha !== confirmarSenha) {
                    throw new Error("As senhas não coincidem!");
                } else {
                    return confirmarSenha;
                }
            })
        ]

const validaCamposLogin = [
    check("email").trim().notEmpty().withMessage("Digite seu email!").bail().isEmail().withMessage("Digite um email válido!").custom(async (emailBody) => {
			const procuraEmail = await Usuario.findOne({
				where: {
					email: emailBody,
				},
			});
            if (procuraEmail) {
                return emailBody;
            }
			if (!procuraEmail) {
				return Promise.reject("Email não encontrado!");
			}
		})
]

const validaCamposEditarUsuario = [
    check('nome').trim().notEmpty().withMessage("Digite seu nome corretamente!").bail().isLength({min:3}).withMessage("Nome muito curto!"),
    check('sobrenome').trim().notEmpty().withMessage("Digite seu sobrenome corretamente!").bail().isLength({min:3}).withMessage("Sobrenome muito curto!"),
    check('celular').trim().notEmpty().withMessage("Digite seu celular corretamente!").bail().isLength({min:10}).withMessage("Numero muito curto!"),
    check('senha').trim().notEmpty().withMessage("Digite sua senha corretamente!").bail().isLength({min:6}).withMessage("A senha deve conter no mínimo 6 caracteres!"),
    check("confirmarSenha").trim().notEmpty().withMessage("Digite sua senha corretamente!").bail().isLength({min:6}).withMessage("A senha deve conter no mínimo 6 caracteres!").
        custom((confirmarSenha, { req }) => {
                const senha = req.body.senha;
                if (senha !== confirmarSenha) {
                    throw new Error("As senhas não coincidem!");
                } else {
                    return confirmarSenha;
                }
            })
]

module.exports = {
	validaCamposCadastroUsuario,
	validaCamposLogin,
	validaCamposEditarUsuario
};
