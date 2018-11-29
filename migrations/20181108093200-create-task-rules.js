'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TaskRules', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      taskId: {
        type: Sequelize.UUID
      },
      priorTaskId: {
        type: Sequelize.UUID
      },
      priorResult: {
        type: Sequelize.UUID
      },
      operator: {
        type: Sequelize.STRING
      },
      // Audit
      createdBy: Sequelize.UUID,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.UUID,
      updatedAt: Sequelize.DATE,

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TaskRules');
  }
};
