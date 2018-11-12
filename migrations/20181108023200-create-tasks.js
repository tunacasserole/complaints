'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      TemplateId: {
        type: Sequelize.UUID
      },
      taskGroupId: {
        type: Sequelize.UUID
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
      createdBy: Sequelize.UUID,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.UUID,
      updatedAt: Sequelize.DATE,
      deletedBy: Sequelize.UUID,
      deletedAt: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
