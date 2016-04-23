exports.up = function(knex, Promise) {
  return knex.schema.createTable('sides', t => {
    t.increments();
    t.text('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sides');
};