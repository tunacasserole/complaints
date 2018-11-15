module.exports = {
    baseTaskModule: function () {
        perform: async () => {
            console.log('performing baseTaskModule')
            return 'performing base task module perform method.'
        }
    }
}