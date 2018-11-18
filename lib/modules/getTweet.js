module.exports = {

  perform: async (configuration) => {
    configurationObject = JSON.parse(configuration)
    var returnMessage = await 'went out and got an awesome tweet from: ' + configurationObject.tweeter
    return returnMessage
  },

  metadata: {
    name: "getTweet",
    version: 1,
    description: "get the latest tweet from the supplied tweeter",
  }
}