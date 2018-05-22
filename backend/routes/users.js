const { queries, actions } = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const users = {
	get(req, res) {
		queries.getUser(req.params.id)
		.then(user => {
			res.status = 200;
			res.json(user);
		})
	},

	update(req, res) {
		actions.updateUser(req.body, req.params.id)
		.then(user => {
			res.status = 200;
			res.json(user);
		})
		.catch(err => {
			console.log(err);
		})
	},

	signup(req, res) {
		console.log(req.body);
		queries.findUserByEmail(req.body.email)
		.then(oneUser => {
			console.log("oneUser => ", oneUser);
			if (oneUser.length === 0) {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					actions.createUser(req.body, hash)
					.then(user => {
						const token = jwt.sign(
							{ 'email': user.email, 'user_id': user.id },
							jwtSecret,
							{ expiresIn: "7d" } );
							res.json({
								token,
								user,
								success: "You have successfully signed in!"
							});
						})
					});
				} else {
					res.json({ error: 'User already exists!' });
				}
			})
			.catch(err => {
				console.log(err);
			})
		},

		signin(req, res) {
			queries.findUserByEmail(req.body.email)
			.then(user => {
				if (user.length == 0) {
					res.json({ error: 'Auth failed' });
				} else {
					bcrypt.compare(req.body.password, user[0].password)
					.then((result) => {
						if (result) {
							const token = jwt.sign(
								{ 'email': user[0].email, 'user_id': user[0].id },
								jwtSecret,
								{ expiresIn: "7d" } );
								res.json({
									token,
									success: "You have successfully signed in!"
								});
							} else {
								res.json({ error: "Wrong email/password combination" });
							}
						});
					}
				})
				.catch(err => {
					console.log(err);
				})
			}
		};

		module.exports = users;
