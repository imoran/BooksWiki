const Actions = require('./actions');
const Queries = require('./queries');
const config = require('./config');
const initOptions = {
  extend(obj, dc) {
    obj.actions = new Actions(obj, pgp);
    obj.queries = new Queries(obj, pgp);
  }
};
const pgp = require('pg-promise')(initOptions);
const db = pgp(config);

module.exports = db;
