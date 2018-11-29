'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      stepId: {
        type: Sequelize.UUID
      },
      startDate: {
        type: Sequelize.DATE
      },
      dueDate: {
        type: Sequelize.DATE
      },
      completeDate: {
        type: Sequelize.DATE
      },
      assignedTo: {
        type: Sequelize.UUID
      },
      state: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.STRING
      },
      answeredBy: {
        type: Sequelize.UUID
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
