const Sequelize = require('sequelize');
const db = require('../../config/db');

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
    OrgAccountTypeId: {
        type: Sequelize.INTEGER(11)
    },
    OrgFarmTypeId: {
        type: Sequelize.INTEGER(11)
    },
    OrgInvoicingTypeId: {
        type: Sequelize.INTEGER(11)
    },
    OrgMarketId: {
        type: Sequelize.INTEGER(11)
    },
    OrgServicePlanTypeId: {
        type: Sequelize.INTEGER(11)
    },
    OrgST101TypeId: {
        type: Sequelize.INTEGER(11)
    },
})

module.exports = CustOrganizationsTable;