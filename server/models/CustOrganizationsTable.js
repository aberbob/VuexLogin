const Sequelize = require('sequelize');
const db = require('../config/db');

const CustOrganizationsTable = db.define('CustOrganizations', {
    name: {
        type: Sequelize.STRING(30)
    },
    street: {
        type: Sequelize.STRING(50)
    },
    street2: {
        type: Sequelize.STRING(15)
    },
    city: {
        type: Sequelize.STRING(21)
    },
    state: {
        type: Sequelize.STRING(2)
    },
    zip: {
        type: Sequelize.INTEGER(5)
    },
    country: {
        type: Sequelize.STRING(3)
    },
    phone: {
        type: Sequelize.INTEGER(11)
    },
    email: {
        type: Sequelize.STRING(25)
    },
    salescontact: {
        type: Sequelize.STRING(11)
    },
    billingcontact: {
        type: Sequelize.STRING(11)
    },
    farmingtype: {
        type: Sequelize.STRING(11)
    },
    serviceplan: {
        type: Sequelize.STRING(11)
    },
    st101: {
        type: Sequelize.STRING(11)
    },
    acctTerms: {
        type: Sequelize.STRING(11)
    },
    invoicing: {
        type: Sequelize.STRING(11)
    },
    market: {
        type: Sequelize.STRING(11)
    }
})

module.exports = CustOrganizationsTable;