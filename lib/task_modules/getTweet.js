const getTweet = Prototype.inheritFrom(baseTaskModule);

getTweet.metadata = {
  name: "getTweet",
  version: "1.0",
  description: "computed task to get a tweet",
  type: "compute"
}

getTweet.perform = () => {
  console.log("performing - get a tweet")
  return "Here is a sample tweet"
}
