const Sequelize = require('sequelize');
sequelize = new Sequelize(process.env.MYSQL_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);