module.exports = {

  perform: async (configuration) => {
    return 'went out and got an awesome tweet from: ' + configuration
  },

  metadata: {
    name: "getTweet",
    version: 1,
    description: "get the latest tweet from the supplied tweeter",
  }
}