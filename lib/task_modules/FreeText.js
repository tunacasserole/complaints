const ManualModule = Prototype.inheritFrom(baseTaskModule);

ManualModule.metadata = {
  name: "manualTask",
  version: "1.1",
  description: "more specific junk",
  type: "Manual"
}

ManualModule.perform = () => {
  console.log("I'm performing some stuff specific to a manual task.")
}
