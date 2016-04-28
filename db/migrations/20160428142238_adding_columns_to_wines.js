exports.up = function(knex, Promise) {
  return knex.schema.table('wines', t => {
    t.text('pairing');
    t.text('about');
  });
};

exports.down = function(knex, Promise) {
  return knex.schem.table('wines', t => {
    t.dropColumns('pairing', 'about');
  });
};