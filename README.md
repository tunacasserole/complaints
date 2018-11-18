# README
# To setup local environment
1. ensure mysql db is installed and running
2. copy sample.env to .env with local db connect information
3. Then run:
	1. `npm install`
	2. `npm run db:create`
	3. `npm run db:migrate`
	4. `npm run db:seed`
	5. `npm start`

# Sample GraphQL Mutations

## Create Templates
```
mutation {
  createTemplate (input:{
    name: "Ship the product.",
    type:"boolean",
    moduleName: "",
  })
  {
    message
    errors { 
      code
      message
    }
    template {
      name
    }
  }
}
```

```
mutation {
  createTemplate (input:{
    name: "Verify power cord",
    type: "singleSelect",
    results: "unverified,verified,exception"
  })
  {
    message
    errors { 
      code
      message
    }
    template {
      name
    }
  }
}
```

## Create Task Group
```
mutation {
  createTaskGroup(input: {
    name: "New group of tasks"}) {
    name
  }
}
```

## Create Task

```
mutation {
  createTask (input:{
    templateId: "26d743f0-e8fa-11e8-8808-e3da952258b6"
  })
  {
    message
    errors { 
      code
      message
    }
    task {
      templateId
      taskGroupId
      dueDate
      status
      data
      dependencies
    } 
  }
}
```

## Perform Task
```
mutation {
  performTask(input: {taskId: "c3998870-ea5c-11e8-a042-495ec4597d71", configuration: "{\"tweeter\":\"trump\"}"}) {
    message
  }
}
```

# Sample GraphQL Queries
## List Tasks
```
{
  listTemplates {
    id
    resultType
    moduleName
    moduleVersion
    name
    description
    version
		tasks {
      name
      status
    }
  }
}

```

## List Templates

```
{
  listTemplates {
    id
    resultType
    moduleName
    moduleVersion
    name
    description
    version
		tasks {
      name
      status
    }
  }
}
```

## Read Task Group
```
{
  readTaskGroup(id: "28043480-e9a5-11e8-b0d0-a36f25ef6629") {
    name
    tasks {
    	name
      status
    }
  }
}
```

# Demo Steps
1. List available modules
2. Create a free text task template
3. List templates to see it was created
4. Instantiate a task from the template
5. Perform the task.
	1. check dependencies
	2. record disposition
	3. update status to done
6. List tasks to see it was completed
7. Repeat with a single select task
	1. handle list of valid values

