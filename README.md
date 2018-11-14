# Microservice
To setup local environment

ensure mysql db is installed and running
copy sample.env to .env with local db connect information
npm install
npm run db:create
npm run db:migrate
npm run db:seed
npm start

Demo Steps
List available modules
Create a free text task template
List templates to see it was created
Instantiate a task from the template
Perform the task
  check dependencies
  record disposition
  update status to done
List tasks to see it was completed

Repeat with a single select task
  handle list of valid values




Sample GraphQL Mutations

Create Task

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

Create Template
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

Sample GraphQL Queries

List
