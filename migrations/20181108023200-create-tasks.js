'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID
      },
      taskTemplateId: {
        type: Sequelize.INTEGER
      },
      taskGroupId: {
        type: Sequelize.INTEGER
      },
      eta: {
        type: Sequelize.TIME
      },
      status: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.JSON
      },
      dependencies: {
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
    return queryInterface.dropTable('Tasks');
  }
};
