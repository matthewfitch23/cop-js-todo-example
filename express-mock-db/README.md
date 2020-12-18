# Express mock db

This is a very basic example CRUD project using Node.js with Express, with a few endpoints to interact with todo items.

The database is mocked, so the data is static and cannot be mutated.

## Running locally

```bash
docker-compose build
docker-compose up api
```

## Endpoints

- `GET localhost:3000/todo` (Get all todo items)
- `GET localhost:3000/todo/1` (Get a specific todo item)
- `POST localhost:3000/todo` (Create a new todo item)
- `PUT localhost:3000/todo/1` (Update an existing todo item)