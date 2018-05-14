const db = require('../database/index')

const users = {
  get(req, res) {
    db.getUser(req.params.id)
    .then(user => {
      res.status = 200;
      res.json(user);
    })
  },

  update(req, res) {
    db.updateUser(req.body, req.params.id)
    .then(user => {
      res.status = 200;
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    })
  },

  create(req, res) {
    db.createUser(req.body)
    .then(user => {
      res.status = 200;
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    })
  }

};

module.exports = users;
