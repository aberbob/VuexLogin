const Sequelize = require('sequelize');
const db = require('../../config/db');

const WOCategoriesTable = db.define('WOCategories', {
    WOCategoriesname: {
        type: Sequelize.STRING(15)
    }
})



module.exports = WOCategoriesTable;