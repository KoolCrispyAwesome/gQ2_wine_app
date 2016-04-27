exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches', t => {
    t.increments();
    t.text('veggie');
    t.text('cheese');
    t.text('meat');
    t.text('dessert');
    t.integer('wine_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matches');
};