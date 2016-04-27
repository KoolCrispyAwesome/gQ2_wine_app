exports.up = function(knex, Promise) {
  return knex.schema.table('users', t => {
    t.text('photo').defaultTo('http://dev.bukkit.org/thumbman/avatars/14/772/160x166/man_wearing_hat_silhouette.png.-m0.png');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', t => {
    t.dropColumn('photo');
  });
};