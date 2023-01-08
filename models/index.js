const Sequelize = require('sequelize');
const User = require('./user');
const Good = require('./good');
const Auction = require('./auction');

const env = process.env.NODE_ENV || 'development';
const config  = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Good = Good;
db.Auction = Auction;

User.initiate(sequelize);
Good.initiate(sequelize);
Auction.initiate(sequelize);

User.associate(db);
Good.associate(db);
Auction.associate(db);

module.exports = db;

