// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'wine_app'
    },
    pool: {
      min: 1,
      max: 2
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'wine_app_test'
    },
    pool: {
      min: 1,
      max: 2
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
