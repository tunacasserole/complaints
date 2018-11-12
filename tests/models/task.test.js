const Models = require('../../models/index.js')
const Task = Models.Task

test("Task defaults taskId with UUID", () => {
  let task = Task.new
  const cost = 4000;
  expect(cost).toEqual(2)
})

test ("Task defaults activeFlag to true", () => {
  let task = Task.new
  expect(1).toEqual(1)
})