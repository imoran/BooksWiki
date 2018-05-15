const db = require('../database/index');

const comments = {
  create(req, res) {
    db.createComment()
  }
}

module.exports = comments;
