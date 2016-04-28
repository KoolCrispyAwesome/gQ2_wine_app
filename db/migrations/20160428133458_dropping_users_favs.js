exports.up = function(knex, Promise) {
  return knex.schema.dropTable('users_favs');
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('users_favs', t => {
    t.increments();
    t.text('user_id');
    t.integer('wine_id');
    t.integer('meat_id');
    t.integer('veggie_id');
    t.integer('cheese_id');
    t.integer('dessert_id');
  });
};