'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TaskTemplates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID
      },
      moduleName: {
        type: Sequelize.STRING
      },
      moduleVersion: {
        type: Sequelize.FLOAT
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      version: {
        type: Sequelize.FLOAT
      },
      configuration: {
        type: Sequelize.JSON
      },

      // Audit
      createdBy: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.INTEGER,
      updatedAt: Sequelize.DATE,
      deletedBy: Sequelize.INTEGER,
      deletedAt: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TaskTemplates');
  }
};
