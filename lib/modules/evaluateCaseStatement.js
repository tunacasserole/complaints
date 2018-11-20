module.exports = {

    perform: async (configuration) => {
      configurationObject = JSON.parse(configuration)
      var returnMessage = await 'email group owner: ' + configurationObject.tweeter
      return returnMessage
    },
  
    metadata: {
      name: "evaluateCaseStatment",
      version: 1,
      description: "Send out an email.",
    }
  }