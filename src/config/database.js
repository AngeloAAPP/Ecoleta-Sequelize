require('dotenv').config()

module.exports = {
    dialect: 'mssql',
    database: 'Ecoleta-seq',
    dialectOptions: {
      authentication: {
        options: {
          domain: 'localhost',
          userName: process.env.DB_USER,
          password: process.env.DB_PASS
        }
      },
      options: {
        instanceName: 'SQLEXPRESS'
      },
      define: {
        timestamps: true
      }
    }
}