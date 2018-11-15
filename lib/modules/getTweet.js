module.exports = {

  perform: async () => {
    console.log('performing getTweet')
    return 'went out and got an awesome tweet from our president'
  },

  metadata: {
    name: "getTweet",
    version: 1,
    description: "get the latest tweet from the president",
  }
}