const createTask = require('./task/createTask')
const editTask = require('./task/editTask')
const createTaskRule = require('./taskRule/createTaskRule')
const createTaskGroup = require('./taskGroup/createTaskGroup')
const createTemplate = require('./template/createTemplate')
const performTask = require('./task/performTask')
const resetTask = require('./task/resetTask')

module.exports = {

    createTask,
    editTask,
    performTask,
    resetTask,
    
    createTemplate, 
    createTaskRule,
    createTaskGroup,

};
