"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microservices = void 0;
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
const aws_lambda_nodejs_1 = require("aws-cdk-lib/aws-lambda-nodejs");
const constructs_1 = require("constructs");
const path_1 = require("path");
class Microservices extends constructs_1.Construct {
    productMicroservice;
    basketMicroservice;
    orderingMicroservice;
    constructor(scope, id, props) {
        super(scope, id);
        // product microservices
        this.productMicroservice = this.createProductFunction();
    }
    createProductFunction() {
        const nodeJsFunctionProps = {
            bundling: {
                externalModules: [
                    'aws-sdk'
                ]
            },
            environment: {
                PRIMARY_KEY: 'id',
            },
            runtime: aws_lambda_1.Runtime.NODEJS_14_X
        };
        // Product microservices lambda function
        const productFunction = new aws_lambda_nodejs_1.NodejsFunction(this, 'productLambdaFunction', {
            entry: (0, path_1.join)(__dirname, `./../src/product/index.js`),
            ...nodeJsFunctionProps,
        });
        return productFunction;
    }
}
exports.Microservices = Microservices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljcm9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVEQUFpRDtBQUNqRCxxRUFBb0Y7QUFDcEYsMkNBQXVDO0FBQ3ZDLCtCQUE0QjtBQU01QixNQUFhLGFBQWMsU0FBUSxzQkFBUztJQUUxQixtQkFBbUIsQ0FBaUI7SUFDcEMsa0JBQWtCLENBQWlCO0lBQ25DLG9CQUFvQixDQUFpQjtJQUVyRCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXlCO1FBQ2pFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRU8scUJBQXFCO1FBQzNCLE1BQU0sbUJBQW1CLEdBQXdCO1lBQy9DLFFBQVEsRUFBRTtnQkFDUixlQUFlLEVBQUU7b0JBQ2YsU0FBUztpQkFDVjthQUNGO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLFdBQVcsRUFBRSxJQUFJO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFLG9CQUFPLENBQUMsV0FBVztTQUM3QixDQUFBO1FBRUQsd0NBQXdDO1FBQ3hDLE1BQU0sZUFBZSxHQUFHLElBQUksa0NBQWMsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7WUFDeEUsS0FBSyxFQUFFLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSwyQkFBMkIsQ0FBQztZQUNuRCxHQUFHLG1CQUFtQjtTQUN2QixDQUFDLENBQUM7UUFFSCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0NBRUY7QUFuQ0Qsc0NBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRhYmxlIH0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1keW5hbW9kYlwiO1xyXG5pbXBvcnQgeyBSdW50aW1lIH0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1sYW1iZGFcIjtcclxuaW1wb3J0IHsgTm9kZWpzRnVuY3Rpb24sIE5vZGVqc0Z1bmN0aW9uUHJvcHMgfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYS1ub2RlanNcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIE1pY3Jvc2VydmljZXNQcm9wcyB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNaWNyb3NlcnZpY2VzIGV4dGVuZHMgQ29uc3RydWN0IHtcclxuXHJcbiAgcHVibGljIHJlYWRvbmx5IHByb2R1Y3RNaWNyb3NlcnZpY2U6IE5vZGVqc0Z1bmN0aW9uO1xyXG4gIHB1YmxpYyByZWFkb25seSBiYXNrZXRNaWNyb3NlcnZpY2U6IE5vZGVqc0Z1bmN0aW9uO1xyXG4gIHB1YmxpYyByZWFkb25seSBvcmRlcmluZ01pY3Jvc2VydmljZTogTm9kZWpzRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBNaWNyb3NlcnZpY2VzUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCk7XHJcblxyXG4gICAgLy8gcHJvZHVjdCBtaWNyb3NlcnZpY2VzXHJcbiAgICB0aGlzLnByb2R1Y3RNaWNyb3NlcnZpY2UgPSB0aGlzLmNyZWF0ZVByb2R1Y3RGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcm9kdWN0RnVuY3Rpb24oKSA6IE5vZGVqc0Z1bmN0aW9uIHtcclxuICAgIGNvbnN0IG5vZGVKc0Z1bmN0aW9uUHJvcHM6IE5vZGVqc0Z1bmN0aW9uUHJvcHMgPSB7XHJcbiAgICAgIGJ1bmRsaW5nOiB7XHJcbiAgICAgICAgZXh0ZXJuYWxNb2R1bGVzOiBbXHJcbiAgICAgICAgICAnYXdzLXNkaydcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIGVudmlyb25tZW50OiB7XHJcbiAgICAgICAgUFJJTUFSWV9LRVk6ICdpZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1bnRpbWU6IFJ1bnRpbWUuTk9ERUpTXzE0X1hcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IG1pY3Jvc2VydmljZXMgbGFtYmRhIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBwcm9kdWN0RnVuY3Rpb24gPSBuZXcgTm9kZWpzRnVuY3Rpb24odGhpcywgJ3Byb2R1Y3RMYW1iZGFGdW5jdGlvbicsIHtcclxuICAgICAgZW50cnk6IGpvaW4oX19kaXJuYW1lLCBgLi8uLi9zcmMvcHJvZHVjdC9pbmRleC5qc2ApLFxyXG4gICAgICAuLi5ub2RlSnNGdW5jdGlvblByb3BzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RGdW5jdGlvbjtcclxuICB9XHJcblxyXG59Il19