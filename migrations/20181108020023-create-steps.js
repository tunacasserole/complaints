'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Steps', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      parentID: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      resultType: {
        type: Sequelize.STRING
      },
      resultList: {
        type: Sequelize.STRING
      },
      module: {
        type: Sequelize.STRING
      },
      duration: {
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
    return queryInterface.dropTable('Steps');
  }
};
