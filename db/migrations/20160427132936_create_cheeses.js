
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cheeses', t => {
    t.increments();
    t.text('name');
    t.text('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cheeses');
};
