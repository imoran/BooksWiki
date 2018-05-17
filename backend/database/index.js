const Actions = require('./actions');
const Queries = require('./queries');
const { dbConfig } = require('../config');
const initOptions = {
  extend(obj, dc) {
    obj.actions = new Actions(obj, pgp);
    obj.queries = new Queries(obj, pgp);
  }
};
const pgp = require('pg-promise')(initOptions);
const db = pgp(dbConfig);

module.exports = db;
