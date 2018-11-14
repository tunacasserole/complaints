'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Templates', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.FLOAT
      },
      moduleName: {
        type: Sequelize.STRING
      },
      moduleVersion: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.TEXT
      },
      dispositions: {
        type: Sequelize.STRING
      },
      configuration: {
        type: Sequelize.JSON
      },

      // Audit
      createdBy: Sequelize.UUID,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.UUID,
      updatedAt: Sequelize.DATE,
      deletedBy: Sequelize.UUID,
      deletedAt: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Templates');
  }
};
