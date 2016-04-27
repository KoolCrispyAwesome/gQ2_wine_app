exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments();
    t.text('email').unique().notNullable();
    t.text('first_name');
    t.text('last_name');
    t.text('password');
    t.text('facebook_id');
    t.text('photo').defaultTo('http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};