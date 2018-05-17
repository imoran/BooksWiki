const { queries, actions } = require('../database');

const ratings = {
  create(req, res) {
    actions.createRating(req.body)
    .then(rating => {
      res.status = 200;
      res.json(rating);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = ratings;
