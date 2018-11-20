module.exports = {

    perform: async (configuration) => {
      configurationObject = JSON.parse(configuration)
      var returnMessage = await 'email group owner: ' + configurationObject.tweeter
      return returnMessage
    },
  
    metadata: {
      name: "emailGroupOwner",
      version: 1,
      description: "Send out an email.",
    }
  }