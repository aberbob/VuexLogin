const Sequelize = require('sequelize');
const db = require('../config/db');

const WOCategoriesTable = db.define('WOCategories', {
    name: {
        type: Sequelize.STRING(15)
    }
})



module.exports = WOCategoriesTable;