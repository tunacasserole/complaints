'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlanSteps', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      planId: {
        type: Sequelize.UUID
      },
      stepId: {
        type: Sequelize.UUID
      },
      sequence: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('PlanSteps');
  }
};
