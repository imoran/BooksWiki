const { queries, actions } = require('../database');

const comments = {
  create(req, res) {
    actions.createComment(req.body)
    .then(comment => {
      res.status = 200;
      res.json(comment);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = comments;
