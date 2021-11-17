function locals(req, res, next) {
	res.locals.sessao = req.session.user;
	return next();
}

module.exports = locals;
