exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines_mains', t => {
    t.increments();
    t.integer('wines_id');
    t.integer('mains_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wines_mains');
};