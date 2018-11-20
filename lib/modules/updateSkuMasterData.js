module.exports = {

    perform: async (configuration) => {
      configurationObject = JSON.parse(configuration)
      var returnMessage = await 'Sku master data syncing complete.'
      return returnMessage
    },
  
    metadata: {
      name: "updateSkuMasterData",
      version: 1,
      description: "Sync sku master data.",
    }
  }