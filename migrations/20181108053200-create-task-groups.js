'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TaskGroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      eta: {
        type: Sequelize.TIME
      },

      // Audit
      createdBy: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedBy: Sequelize.INTEGER,
      updatedAt: Sequelize.DATE,
      deletedBy: Sequelize.INTEGER,
      deletedAt: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TaskGroups');
  }
};