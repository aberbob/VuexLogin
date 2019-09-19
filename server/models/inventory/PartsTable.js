const Sequelize = require('sequelize');
const db = require('../../config/db');

const PartsTable = db.define('Parts', {
    PartsSubcategoryId: {
        type: Sequelize.INTEGER(5)
    },
    PartsCategoryId: {
        type: Sequelize.INTEGER(5)
    },
    partnumber: {
        type: Sequelize.STRING(15),
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING(50)
    },
    notes: {
        type: Sequelize.STRING(100)
    },
    uom: {
        type: Sequelize.STRING(10)
    },
    listprice: {
        type: Sequelize.DECIMAL(13,2)
    },
    tabxable: {
        type: Sequelize.STRING(10)
    }
})



module.exports = PartsTable;