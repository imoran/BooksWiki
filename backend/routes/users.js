const { queries, actions } = require('../database');

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

  create(req, res) {
    actions.createUser(req.body)
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
