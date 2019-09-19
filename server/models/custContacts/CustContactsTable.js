const Sequelize = require('sequelize');
const db = require('../../config/db');

const CustContactsTable = db.define('CustContacts', {
    fn: {
        type: Sequelize.STRING(20)
    },
    ln: {
        type: Sequelize.STRING(20)
    },
    phonenumber: {
        type: Sequelize.INTEGER(11)
    },
    email: {
        type: Sequelize.STRING(11)
    },
    CustOrganizationId: {
        type: Sequelize.INTEGER(11)
    },
    CustContactStatusId: {
        type: Sequelize.INTEGER(12)
    }
})

module.exports = CustContactsTable;