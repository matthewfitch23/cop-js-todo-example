# Express mock db

This is a very basic example CRUD project using Node.js in AWS Lambda, with a few endpoints to interact with todo items.

The database is mocked, so the data is static and cannot be mutated.

The project is based off the AWS example CRUD scaffold.

## Deployment
To deploy the lambda functions to AWS, simply execute the following command:
```bash
serverless deploy
```

## How to use

Simply perform requests against the exposed endpoints:

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/todo --data '{ "body" : "Learn Serverless" }'
```

### Get all


```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/todo
```

### Get one

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/todo/<id>
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/todo/<id> --data '{ "body" : "Understand Serverless" }'
```


## AWS services used

- Lambda
- API Gateway
- DynamoDB
