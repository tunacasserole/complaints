'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProjectTasks', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      projectId: {
        type: Sequelize.UUID
      },
      taskId: {
        type: Sequelize.UUID
      },
      sequence: {
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
    return queryInterface.dropTable('ProjectTasks');
  }
};
