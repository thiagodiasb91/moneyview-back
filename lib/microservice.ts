import { ITable } from "aws-cdk-lib/aws-dynamodb";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";


interface MicroservicesProps {
}

export class Microservices extends Construct {

  public readonly productMicroservice: NodejsFunction;
  public readonly basketMicroservice: NodejsFunction;
  public readonly orderingMicroservice: NodejsFunction;

  constructor(scope: Construct, id: string, props: MicroservicesProps) {
    super(scope, id);

    // product microservices
    this.productMicroservice = this.createProductFunction();
  }

  private createProductFunction() : NodejsFunction {
    const nodeJsFunctionProps: NodejsFunctionProps = {
      bundling: {
        externalModules: [
          'aws-sdk'
        ]
      },
      environment: {
        PRIMARY_KEY: 'id',
      },
      runtime: Runtime.NODEJS_20_X
    }

    // Product microservices lambda function
    const productFunction = new NodejsFunction(this, 'productLambdaFunction', {
      entry: join(__dirname, `./../src/product/index.js`),
      ...nodeJsFunctionProps,
    });

    return productFunction;
  }

}