'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      templateId: {
        type: Sequelize.UUID
      },
      taskGroupId: {
        type: Sequelize.UUID
      },
      dueDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.JSON
      },
      dependencies: {
        type: Sequelize.JSON
      },

      // Audit
      createdBy: Sequelize.UUID,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.UUID,
      updatedAt: Sequelize.DATE,

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
