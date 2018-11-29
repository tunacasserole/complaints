'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      planId: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      parentId: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
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
      ownerId: {
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
    return queryInterface.dropTable('Projects');
  }
};
