exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines', t => {
    t.increments();
    t.text('name');
    t.text('grape');
    t.integer('year');
    t.text('image');
    t.text('price');
    t.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wines');
};