'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('WorkOrders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            description: {
                type: Sequelize.STRING(50)
            },
            type: {
                type: Sequelize.STRING(30)
            },
            notes: {
                type: Sequelize.STRING(500)
            },
            EquipmentProfileId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'EquipmentProfiles',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            WOCategoryId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'WOCategories',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            WOStatusId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'WOStatuses',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            CustContactId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'CustContacts',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            CustOrganizationId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'CustOrganizations',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            UserId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            WOPriorityId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'WOPriorities',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('WorkOrders');
    }
};
