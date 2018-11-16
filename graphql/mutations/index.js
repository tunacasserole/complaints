const createTask = require('./task/createTask')
const createTaskGroup = require('./taskGroup/createTaskGroup')
const createTemplate = require('./template/createTemplate')
const performTask = require('./task/performTask')
const resetTask = require('./task/resetTask')

module.exports = {

    createTask,
    performTask,
    resetTask,
    
    createTemplate, 
    createTaskGroup,

};
