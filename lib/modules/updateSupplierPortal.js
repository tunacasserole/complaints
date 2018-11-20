module.exports = {

    perform: async (configuration) => {
      configurationObject = JSON.parse(configuration)
      var returnMessage = await 'Finished updating supplier portal.'
      return returnMessage
    },
  
    metadata: {
      name: "updateSkuMasterData",
      version: 1,
      description: "Update supplier portal with new BOM details.",
    }
  }