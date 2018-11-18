const modules = require('../modules')

module.exports = function (){
    return {
        perform: async (moduleName, configuration) => {
            var returnMessage = await eval('modules.' + moduleName + '.perform(configuration)')
            console.log(returnMessage)
        }
    }
}
