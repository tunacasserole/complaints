'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StepRules', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      stepId: {
        type: Sequelize.UUID
      },
      priorId: {
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
    return queryInterface.dropTable('StepRules');
  }
};
