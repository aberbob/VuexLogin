const Sequelize = require('sequelize');
const db = require('../../config/db');

const PartsSubcategoryTable = db.define('PartsSubcategories', {
    name: {
        type: Sequelize.STRING(25)
    },
    PartsCategoriesId: {
        type: Sequelize.STRING(25)
    }
})



module.exports = PartsSubcategoryTable;