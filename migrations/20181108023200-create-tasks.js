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
      status: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.STRING
      },
      dueDate: {
        type: Sequelize.DATE
      },
      completeDate: {
        type: Sequelize.DATE
      },

      // Audit
      createdBy: Sequelize.UUID,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.UUID,
      updatedAt: Sequelize.DATE,

    });
  },
  down: (queryInterface, Sequelize) => {
    return Sequelize.dropTable('Tasks');
  }
};
