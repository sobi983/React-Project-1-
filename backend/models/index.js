const dbConfig = require('../config/config.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle

  }
}
)

sequelize.authenticate()
  .then(() => {
    console.log('Database Connected..')
  })
  .catch(err => {
    console.log('Error' + err)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./usersModel.js')(sequelize, DataTypes)
db.following = require('./followingModel.js')(sequelize, DataTypes)
db.followers = require('./followersModel.js')(sequelize, DataTypes)
db.posts = require('./postsModel.js')(sequelize, DataTypes)
db.replies = require('./repliesModel.js')(sequelize, DataTypes)

db.users.hasMany(db.posts, {
  foreignKey: 'User_Info_id',
  target: 'id'
});

db.users.hasMany(db.followers, {
  foreignKey: 'User_Info_id',
  target: 'id'
});

db.users.hasMany(db.following, {
  foreignKey: 'User_Info_id',
  target: 'id'
});

db.users.hasMany(db.replies, {
  foreignKey: 'User_Info_id',
  target: 'id'
});

db.posts.hasMany(db.replies, {
  foreignKey: 'Post_Info_id',
  target: 'id'
});

module.exports = db