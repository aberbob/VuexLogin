const Sequelize = require('sequelize');
const db = require('../config/db');

const UsersTable = db.define('Users', {
    fn: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    ln: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    permgroup: {
        type: Sequelize.INTEGER(2)
    }
})

module.exports = UsersTable;