# moneyview-back

This is a project for TypeScript development with CDK.
The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Whats Including In This Repository
We will be following the reference architecture above and it includes;

* **REST API** and **CRUD** endpoints with using **AWS Lambda, API Gateway**
* **Data persistence** with using **AWS DynamoDB**
* **Decouple microservices** with events using **Amazon EventBridge**
* **Message Queues** for cross-service communication using **AWS SQS**
* **Cloud stack development** with **IaC** using **AWS CloudFormation and AWS CDK**

## Prerequisites
You will need the following tools:

* AWS Account and User
* AWS CLI
* NodeJS
* AWS CDK Toolkit
* Docker

### Run The Project
Follow these steps to get your development environment set up: (Before Run Start the Docker Desktop)
1. Clone the repository
2. At the root directory which include **cdk.json** files, run below command:
```csharp
cdk deploy
```
>Note: Make sure that your Docker Desktop is running before execute the cdk deploy command.

4. Wait for provision all microservices into aws cloud. That’s it!

5. You can **launch microservices** as below urls:

* **Product API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/product**
* **Basket API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/basket**
* **Ordering API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/order**

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Authors

* **Mehmet Ozkaya** - *Initial work* - [mehmetozkaya](https://github.com/mehmetozkaya)

See also the list of [contributors](https://github.com/aspnetrun/run-core/contributors) who participated in this project. Check also [gihtub page of repository.](https://aspnetrun.github.io/run-aspnetcore-angular-realworld/)
