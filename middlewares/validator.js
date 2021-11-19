const { body, check} = require("express-validator");
const { Sequelize, Usuario } = require("../models");
const bcrypt = require("bcryptjs");

const validaCamposCadastoUsuario = [
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
            if (!procuraEmail) {
                return Promise.reject("E-mail não existe! Cadastre-se para utilizar os nossos serviços.");
            }
			if (procuraEmail.email) {
				return emailBody;
			}
		}),
        check('senha').trim().notEmpty().withMessage("Digite sua senha corretamente!").bail().isLength({min:6}).withMessage("A senha deve conter no mínimo 6 caracteres!")
            .custom(async (senhaBody) => {
                    const procuraUsuario = await Usuario.findOne({
                        where: {
                            email: emailBody,
                        }});
                        if(bcrypt.compareSync(senhaBody, procuraUsuario.senha)){
                            return senhaBody;
                        }
                        else{
                            throw new Error("Senha incorreta!");
                        }
                        /*if (procuraUsuario.senha !== senhaBody) {
                        throw new Error("Senha incorreta!");
                        } else {
                            return senhaBody;
                        }*/
                })

]

module.exports = {
	validaCamposCadastoUsuario,
	validaCamposLogin,
};
