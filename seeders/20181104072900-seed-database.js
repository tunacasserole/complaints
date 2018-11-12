'use strict';

const Models = require('../models')

module.exports = {

  up: async (queryInterface, Sequelize) => {
    let task = await Models.Task.create({
      name: 'Manual',
      description: 'Lorem ipsum dolar sit.'
      })

    await Models.Task.bulkCreate([{
      taskId: task.id,
      TemplateId: 1,
      data: {},
      status: 'Lorem ipsum dolar sit.'
    }, {
      taskId: task.id,
      TemplateId: 1,
      data: {},
      status: 'Lorem ipsum dolar sit.'
    }, {
      taskId: task.id,
      TemplateId: 1,
      data: {},
      status: 'Lorem ipsum dolar sit.'
    }, {
      taskId: task.id,
      TemplateId: 1,
      data: {},
      status: 'Lorem ipsum dolar sit.'
    }])

  },
  down: function (queryInterface, Sequelize) {

  }

};
