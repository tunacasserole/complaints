'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plans', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.STRING
      },
      parentId: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      businessUnit: {
        type: Sequelize.STRING
      },
      productClass: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      version: {
        type: Sequelize.INTEGER
      },
      scheduleMethod: {
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
    return queryInterface.dropTable('Plans');
  }
};
