'use strict';

const Models = require('../models')

module.exports = {

  up: async (queryInterface, Sequelize) => {

    // TASK GROUP
    let tg = await Models.TaskGroup.create({
      name: 'Supplier readiness & preparation'
    })

    // TASKS & TEMPLATES
    let t2 = await Models.Template.create({
      name: 'Desired Order Date',
      resultType: 'date'
    })
    let task2 = await Models.Task.create({
      templateId: t2.id,
      taskGroupId: tg.id
    })

    let t3 = await Models.Template.create({
      name: 'Desired Quote Date',
      resultType: 'date'
    })
    let task3 = await Models.Task.create({
      templateId: t3.id,
      taskGroupId: tg.id
    })

    let t4 = await Models.Template.create({
      name: 'Desired Build Date',
      resultType: 'date'
    })
    let task4 = await Models.Task.create({
      templateId: t4.id,
      taskGroupId: tg.id
    })

    let t5 = await Models.Template.create({
      name: 'Desired Early Ship Date',
      resultType: 'date'
    })
    let task5 = await Models.Task.create({
      templateId: t4.id,
      taskGroupId: tg.id
    })

    let t6 = await Models.Template.create({
      name: 'Platform PM/Options PM Sync up on Options status at DPC exit',
      resultType: 'yesNo'
    })
    let task6 = await Models.Task.create({
      templateId: t6.id,
      taskGroupId: tg.id
    })

    let t7 = await Models.Template.create({
      name: 'Packaging and label requirements complete',
      resultType: 'yesNo'
    })
    let task7 = await Models.Task.create({
      templateId: t7.id,
      taskGroupId: tg.id
    })

    let t8 = await Models.Template.create({
      name: 'Platform shared options demand provided to shared options PMs',
      resultType: 'yesNo'
    })
    let task8 = await Models.Task.create({
      templateId: t8.id,
      taskGroupId: tg.id
    })

    let t9 = await Models.Template.create({
      name: 'Early ship shop floor systems setup in applicable factories',
      resultType: 'yesNo'
    })
    let task9 = await Models.Task.create({
      templateId: t9.id,
      taskGroupId: tg.id
    })

    let t10 = await Models.Template.create({
      name: 'Early ship supplier materials buffer in place.',
      resultType: 'yesNo'
    })
    let task10 = await Models.Task.create({
      templateId: t10.id,
      taskGroupId: tg.id
    })

    let t11 = await Models.Template.create({
      name: 'Get a tweet from the president.',
      resultType: 'compute',
      moduleName: 'getTweet'
    })
    let task11 = await Models.Task.create({
      templateId: t11.id,
      taskGroupId: tg.id
    })

  },
  down: function (queryInterface, Sequelize) {

  }

};
