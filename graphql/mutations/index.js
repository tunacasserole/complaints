const createTask = require('./task/createTask')
const editTask = require('./task/editTask')
const performTask = require('./task/performTask')
const resetTask = require('./task/resetTask')

const createTaskRule = require('./taskRule/createTaskRule')
const editTaskRule = require('./taskRule/editTaskRule')
const createProject = require('./project/createProject')
const editProject = require('./project/editProject')
const createProjectTask = require('./projectTask/createProjectTask')
const editProjectTask = require('./projectTask/editProjectTask')
const createPlan = require('./plan/createPlan')
const editPlan = require('./plan/editPlan')
const createPlanStep = require('./planStep/createPlanStep')
const editPlanStep = require('./planStep/editPlanStep')
const createStep = require('./step/createStep')
const editStep = require('./step/editStep')
const createStepRule = require('./stepRule/createStepRule')
const editStepRule = require('./stepRule/editStepRule')


module.exports = {

    createTask,
    editTask,
    performTask,
    resetTask,

    createStep,
    editStep,

    createStepRule,
    editStepRule,

    createPlan,
    editPlan,

    createPlanStep,
    editPlanStep,

    createProject,
    editProject,

    createTaskRule,
    editTaskRule,

    createProjectTask,
    editProjectTask

};
