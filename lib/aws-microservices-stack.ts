import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ApiGateway } from './apigateway';
// import { SwnDatabase } from './database';
import { Microservices } from './microservice';

export class AwsMicroservicesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const microservices = new Microservices(this, 'Microservices', {
    });

    const apigateway = new ApiGateway(this, 'ApiGateway', {
      productMicroservice: microservices.productMicroservice,
      basketMicroservice: microservices.basketMicroservice,
      orderingMicroservices: microservices.orderingMicroservice
    });
    
  }
}
