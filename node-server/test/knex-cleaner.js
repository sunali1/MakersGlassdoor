var knexCleaner = require('knex-cleaner');
var knex = require('knex');

exports.emptyDb = function() {
  return knexCleaner.clean(
    knex(
      {
        client: 'pg',
        connection: 'postgres://localhost/makers_glassdoor_test',
      }
    )
  )
    .then(() => {
    });
};
