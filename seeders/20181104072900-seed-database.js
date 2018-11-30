'use strict';

const Models = require('../models')
console.log('------------ START - seeding database -----------')
module.exports = {

  up: async (queryInterface, Sequelize) => {

    // Parent Plan
    // Plan
    let p = await Models.Plan.create({
      name: 'Expeditied Launch',
      description: 'Equivalent to copernicus launch'
    })


    // -------------- Child Plan - Product Development -----------
    let p1 = await Models.Plan.create({
      name: 'Product Development',
      description: 'Equivalent to copernicus launch'
    })

    // Step 1
    let s1 = await Models.Step.create({
      name: 'Define Product',
      description: 'Equivalent to copernicus task'
    })
    let ps1 = await Models.PlanStep.create({
      planId: p1.id,
      stepId: s1.id
    })

    // Step 2
    let s2 = await Models.Step.create({
      name: 'Focus Group',
      description: 'Equivalent to copernicus task'
    })
    let ps2 = await Models.PlanStep.create({
      planId: p1.id,
      stepId: s2.id
    })

    // Step 3
    let s3 = await Models.Step.create({
      name: 'Finalize Design',
      description: 'Equivalent to copernicus task'
    })
    let ps3 = await Models.PlanStep.create({
      planId: p1.id,
      stepId: s3.id
    })


    // -------------- Child Plan - Marketing ------------
    let mp1 = await Models.Plan.create({
      name: 'Marketing',
      description: 'Equivalent to copernicus launch'
    })

    // Step 1
    let ms1 = await Models.Step.create({
      name: 'Develop Materials',
      description: 'Equivalent to copernicus task'
    })
    let mps1 = await Models.PlanStep.create({
      planId: mp1.id,
      stepId: ms1.id
    })

    // Step 2
    let ms2 = await Models.Step.create({
      name: 'Plan Rollout',
      description: 'Equivalent to copernicus task'
    })
    let mps2 = await Models.PlanStep.create({
      planId: mp1.id,
      stepId: ms2.id
    })

    // Step 3
    let ms3 = await Models.Step.create({
      name: 'Email Product Development',
      description: 'Equivalent to copernicus task'
    })
    let mps3 = await Models.PlanStep.create({
      planId: mp1.id,
      stepId: ms3.id
    })


    // -------------- Child Plan - Factory ------------
    let fp1 = await Models.Plan.create({
      name: 'Factory',
      description: 'Equivalent to copernicus launch'
    })

    // Step 1
    let fs1 = await Models.Step.create({
      name: 'Attach Bill of Materials',
      description: 'Equivalent to copernicus task'
    })
    let fps1 = await Models.PlanStep.create({
      planId: fp1.id,
      stepId: fs1.id
    })

    // Step 2
    let fs2 = await Models.Step.create({
      name: 'Procure Parts',
      description: 'Equivalent to copernicus task'
    })
    let fps2 = await Models.PlanStep.create({
      planId: fp1.id,
      stepId: fs2.id
    })

    // Step 3
    let fs3 = await Models.Step.create({
      name: 'Finalize Build',
      description: 'Equivalent to copernicus task'
    })
    let fps3 = await Models.PlanStep.create({
      planId: fp1.id,
      stepId: fs3.id
    })




    console.log('------------ END - seeding database -----------')

  },
  down: function (queryInterface, Sequelize) {

  }

};
