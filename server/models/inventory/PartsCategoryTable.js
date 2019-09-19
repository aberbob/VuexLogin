const Sequelize = require('sequelize');
const db = require('../../config/db');

const PartsCategoryTable = db.define('PartsCategories', {
    name: {
        type: Sequelize.STRING(25)
    }
})



module.exports = PartsCategoryTable;