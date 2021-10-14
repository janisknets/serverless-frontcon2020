# serverless-frontcon2020

The code provided here is relying on [serverless-framework](https://www.serverless.com/) to realize the deployments.

Prerequisites:
- Installed git client
- Installed AWS CLI version 2, https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
- AWS programmatic access credentials (AWS IAM access key ID and secret access key)
- Postman and curl

## Prepare environment

You should be able to prepare your environment, please refer to the official documentation at https://www.serverless.com/framework/docs/getting-started to install a command-line interface (CLI) utility.

Clone original repository

```bash
$ git clone https://github.com/janisknets/serverless-frontcon2020
```

Change directory

```bash
$ cd serverless-frontcon2020
```

Install typescript plugin using

```bash
$ serverless plugin install -n serverless-plugin-typescript
```

## Deployment

  > To be able to deploy on AWS a special named profile `personal` should be configured using AWS CLI as follows `aws --profile personal configure`
  > After that you may use `aws --profile personal sts get-caller-identity` to confirm access to AWS.

In order to deploy you have to login first

```bash
$ serverless login
```

Install dependencies optimization plugin

```bash
$ serverless plugin install -n serverless-plugin-optimize
```

Then perform deployment with

```bash
$ serverless deploy --stage dev --aws-profile personal
```

You may deploy individual functions

```bash
$ serverless deploy --stage dev --aws-profile personal -f getUsers
```

```bash
$ serverless deploy --stage dev --aws-profile personal -f postUsers
```

## Local development

With a `helloWorld` handler in place you may run

```bash
$ serverless invoke local --function helloWorld
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using serverless-offline plugin. In order to do that, execute the following command

```bash
$ serverless plugin install -n serverless-offline
```

After installation, you can start local emulation with:

```bash
$ serverless offline
```

## Test functions locally

Install additional plugin first

```bash
$ serverless plugin install -n serverless-dynamodb-local
```

Install local instance of DynamoDB

```bash
$ serverless dynamodb install
```

Prepare ephemeral DynamoDB table and start local deployment

```bash
$ AWS_ACCESS_KEY_ID="DEFAULT_ACCESS_KEY" AWS_SECRET_ACCESS_KEY="DEFAULT_SECRET" serverless offline start
```

  > `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` provide synthetic IAM credentials for local DynamoDB

### Using curl

Open another terminal window and start testing API endpoints.

Return basic message from `helloWorld` application

```bash
$ curl -s http://localhost:3000/local/hello
{"message":"Hello World!"}
```

Get all users

```bash
$ curl -s http://localhost:3000/local/users
{"users":[]}
```

Add new user

```bash
$ curl -d '{"id": "john.doe", "name": "John", "surname": "Doe", "email": "john.doe@gmail.com"}' -H 'Content-Type: application/json' -X POST http://localhost:3000/local/users
{"user":{"id":"john.doe","name":"John","surname":"Doe","email":"john.doe@gmail.com"}}
```

You may use the same method for endpoints deployed on AWS

### Using Postman

Download Postman from the official homepage at https://www.postman.com/downloads, install and run it. You may skip create account screen, just click 'Skip and go to the app'.

When you're ready select File > New from the top menu, select HTTP Request. Now it is time to select appropriate HTTP method, enter URL and click Send button.

## Clean up

It is recommended to remove resources in AWS if you do not plan to use them anymore

```bash
$ serverless remove --stage dev --aws-profile personal
```
