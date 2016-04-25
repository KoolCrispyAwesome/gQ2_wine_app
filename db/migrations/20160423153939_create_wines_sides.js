exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines_sides', t => {
    t.increments();
    t.integer('wines_id');
    t.integer('sides_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wines_sides');
};