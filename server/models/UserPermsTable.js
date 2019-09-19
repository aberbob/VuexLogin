const Sequelize = require('sequelize');
const db = require('../config/db');

const UserPermsTable = db.define('UserPerms', {
    name: {
        type: Sequelize.STRING(100)
    }
})



module.exports = UserPermsTable;