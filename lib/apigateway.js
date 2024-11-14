"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGateway = void 0;
const aws_apigateway_1 = require("aws-cdk-lib/aws-apigateway");
const constructs_1 = require("constructs");
class ApiGateway extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        // Product api gateway
        this.createProductApi(props.productMicroservice);
    }
    createProductApi(productMicroservice) {
        // Product microservices api gateway
        // root name = product
        // GET /product
        // POST /product
        // Single product with id parameter
        // GET /product/{id}
        // PUT /product/{id}
        // DELETE /product/{id}
        const apigw = new aws_apigateway_1.LambdaRestApi(this, 'productApi', {
            restApiName: 'Product Service',
            handler: productMicroservice,
            proxy: false
        });
        const product = apigw.root.addResource('product');
        product.addMethod('GET'); // GET /product
        product.addMethod('POST'); // POST /product
        const singleProduct = product.addResource('{id}'); // product/{id}
        singleProduct.addMethod('GET'); // GET /product/{id}
        singleProduct.addMethod('PUT'); // PUT /product/{id}
        singleProduct.addMethod('DELETE'); // DELETE /product/{id}
    }
}
exports.ApiGateway = ApiGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTJEO0FBRTNELDJDQUF1QztBQVF2QyxNQUFhLFVBQVcsU0FBUSxzQkFBUztJQUVyQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsbUJBQThCO1FBQ3JELG9DQUFvQztRQUNwQyxzQkFBc0I7UUFFdEIsZUFBZTtRQUNmLGdCQUFnQjtRQUVoQixtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFFdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSw4QkFBYSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDbEQsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDekMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLGdCQUFnQjtRQUU1QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZTtRQUNsRSxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3BELGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDcEQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtJQUM1RCxDQUFDO0NBRUo7QUFyQ0QsZ0NBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFtYmRhUmVzdEFwaSB9IGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheVwiO1xyXG5pbXBvcnQgeyBJRnVuY3Rpb24gfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYVwiO1xyXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xyXG5cclxuaW50ZXJmYWNlIEFwaUdhdGV3YXlQcm9wcyB7XHJcbiAgICBwcm9kdWN0TWljcm9zZXJ2aWNlOiBJRnVuY3Rpb24sXHJcbiAgICBiYXNrZXRNaWNyb3NlcnZpY2U6IElGdW5jdGlvbixcclxuICAgIG9yZGVyaW5nTWljcm9zZXJ2aWNlczogSUZ1bmN0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlHYXRld2F5IGV4dGVuZHMgQ29uc3RydWN0IHsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFwaUdhdGV3YXlQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XHJcblxyXG4gICAgICAgIC8vIFByb2R1Y3QgYXBpIGdhdGV3YXlcclxuICAgICAgICB0aGlzLmNyZWF0ZVByb2R1Y3RBcGkocHJvcHMucHJvZHVjdE1pY3Jvc2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9kdWN0QXBpKHByb2R1Y3RNaWNyb3NlcnZpY2U6IElGdW5jdGlvbikge1xyXG4gICAgICAvLyBQcm9kdWN0IG1pY3Jvc2VydmljZXMgYXBpIGdhdGV3YXlcclxuICAgICAgLy8gcm9vdCBuYW1lID0gcHJvZHVjdFxyXG5cclxuICAgICAgLy8gR0VUIC9wcm9kdWN0XHJcbiAgICAgIC8vIFBPU1QgL3Byb2R1Y3RcclxuXHJcbiAgICAgIC8vIFNpbmdsZSBwcm9kdWN0IHdpdGggaWQgcGFyYW1ldGVyXHJcbiAgICAgIC8vIEdFVCAvcHJvZHVjdC97aWR9XHJcbiAgICAgIC8vIFBVVCAvcHJvZHVjdC97aWR9XHJcbiAgICAgIC8vIERFTEVURSAvcHJvZHVjdC97aWR9XHJcblxyXG4gICAgICBjb25zdCBhcGlndyA9IG5ldyBMYW1iZGFSZXN0QXBpKHRoaXMsICdwcm9kdWN0QXBpJywge1xyXG4gICAgICAgIHJlc3RBcGlOYW1lOiAnUHJvZHVjdCBTZXJ2aWNlJyxcclxuICAgICAgICBoYW5kbGVyOiBwcm9kdWN0TWljcm9zZXJ2aWNlLFxyXG4gICAgICAgIHByb3h5OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY29uc3QgcHJvZHVjdCA9IGFwaWd3LnJvb3QuYWRkUmVzb3VyY2UoJ3Byb2R1Y3QnKTtcclxuICAgICAgcHJvZHVjdC5hZGRNZXRob2QoJ0dFVCcpOyAvLyBHRVQgL3Byb2R1Y3RcclxuICAgICAgcHJvZHVjdC5hZGRNZXRob2QoJ1BPU1QnKTsgIC8vIFBPU1QgL3Byb2R1Y3RcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHNpbmdsZVByb2R1Y3QgPSBwcm9kdWN0LmFkZFJlc291cmNlKCd7aWR9Jyk7IC8vIHByb2R1Y3Qve2lkfVxyXG4gICAgICBzaW5nbGVQcm9kdWN0LmFkZE1ldGhvZCgnR0VUJyk7IC8vIEdFVCAvcHJvZHVjdC97aWR9XHJcbiAgICAgIHNpbmdsZVByb2R1Y3QuYWRkTWV0aG9kKCdQVVQnKTsgLy8gUFVUIC9wcm9kdWN0L3tpZH1cclxuICAgICAgc2luZ2xlUHJvZHVjdC5hZGRNZXRob2QoJ0RFTEVURScpOyAvLyBERUxFVEUgL3Byb2R1Y3Qve2lkfVxyXG4gICAgfVxyXG5cclxufSJdfQ==