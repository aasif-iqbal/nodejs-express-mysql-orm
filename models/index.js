const { Sequelize, DataTypes, Model } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
let sequelize = new Sequelize('node-mysql-orm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  // import userModel
  db.user = require('./user.js')(sequelize, DataTypes, Model);

  // import contactModel
  db.contact = require('./contact.js')(sequelize, DataTypes);

//for production
// db.sequelize.sync();

// for development
db.sequelize.sync({ alter:true }); // it update's if any change in table
// db.sequelize.sync({ force:true }); // 



  module.exports = db;