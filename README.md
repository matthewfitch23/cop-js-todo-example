# Node.JS Todo example
A basic CRUD app for managing TODO items, using Express and MongoDB.

Created for the Bazaarvoice Belfast Engineering Community of Practice.

## Installation

Install dependencies
```
npm install
```

You will also need to configure your local MongoDB with a database named `cop`
and a collection named `todoItems`.

## Running the service

Run your local MongoDB
```
docker run -p 27017:27017 mongo:latest
```

Run the Express service
```
node index.js
```

## Using the service

Use an HTTP client such as Postman to make requests.

Available requests
```
GET    localhost:3000/todo                           # Get all
GET    localhost:3000/todo/5f7c31fc7011c618ef7aceec  # Get one
POST   localhost:3000/todo                           # Create
PUT    localhost:3000/todo/5f7c31fc7011c618ef7aceec  # Update
DELETE localhost:3000/todo/5f7c31fc7011c618ef7aceec  # Delete
```

Data model
```
{
    "_id": "5f7c31fc7011c618ef7aceec", # Not required for input
    "description": "go to the post office",
    "completed": false
}
```