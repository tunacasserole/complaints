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
      resultType: {
        type: Sequelize.STRING
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
      results: {
        type: Sequelize.STRING
      },
      configuration: {
        type: Sequelize.JSON
      },
      offset: {
        type: Sequelize.INTEGER
      },

      // Audit
      createdBy: Sequelize.UUID,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.UUID,
      updatedAt: Sequelize.DATE,
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Templates');
  }
};
