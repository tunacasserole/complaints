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


# Sample GraphQL Mutations

## Create Task

```
mutation {
  createTask (input:{
    templateId: "27cf5a40-e823-11e8-8107-af8c11b3126c"
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
      eta
      status
      data
      dependencies
    } 
  }
}
```

## Perform Task


## Create Template
```
mutation {
  createTemplate (input:{
    name: "Template1",
    moduleName: "boolean"
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


# Sample GraphQL Queries
## List Tasks

```
{
  listTasks {
    id
    moduleName
    moduleVersion
    name
    description
    version
		configuration
  }
}
```

## List Templates

```
{
  listTemplates {
    id
    moduleName
    moduleVersion
    name
    description
    version
		configuration
  }
}
```


