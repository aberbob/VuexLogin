'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('EquipmentProfiles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING(15)
            },
            description: {
                type: Sequelize.STRING(15)
            },
            type: {
                type: Sequelize.STRING(15)
            },
            make: {
                type: Sequelize.STRING(15)
            },
            model: {
                type: Sequelize.STRING(15)
            },
            rowqty: {
                type: Sequelize.STRING(15)
            },
            PlanterClosingWheelId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterClosingWheels',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterDepthAdjustId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterDepthAdjusts',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterDownForceId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterDownForces',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterDriveId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterDrives',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterInsecticideId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterInsecticides',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterMeterId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterMeters',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterLiquidId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterLiquids',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterMonitorId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterMonitors',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterHarnessingId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterHarnessings',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterSeedFirmerId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterSeedFirmers',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterSeedTubeId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterSeedTubes',
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
        return queryInterface.dropTable('EquipmentProfiles');
    }
};
