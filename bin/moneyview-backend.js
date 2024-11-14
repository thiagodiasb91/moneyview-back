#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const aws_microservices_stack_1 = require("../lib/aws-microservices-stack");
const app = new cdk.App();
new aws_microservices_stack_1.AwsMicroservicesStack(app, 'AwsMicroservicesStack', {
    /* If you don't specify 'env', this stack will be environment-agnostic.
     * Account/Region-dependent features and context lookups will not work,
     * but a single synthesized template can be deployed anywhere. */
    /* Uncomment the next line to specialize this stack for the AWS Account
     * and Region that are implied by the current CLI configuration. */
    // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
    /* Uncomment the next line if you know exactly what Account and Region you
     * want to deploy the stack to. */
    env: { account: '167030579088', region: 'us-east-1' },
    /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXl2aWV3LWJhY2tlbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb25leXZpZXctYmFja2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DLDRFQUF1RTtBQUV2RSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLCtDQUFxQixDQUFDLEdBQUcsRUFBRSx1QkFBdUIsRUFBRTtJQUN0RDs7cUVBRWlFO0lBRWpFO3VFQUNtRTtJQUNuRSw2RkFBNkY7SUFFN0Y7c0NBQ2tDO0lBQ2xDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtJQUVyRCw4RkFBOEY7Q0FDL0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxyXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XHJcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCB7IEF3c01pY3Jvc2VydmljZXNTdGFjayB9IGZyb20gJy4uL2xpYi9hd3MtbWljcm9zZXJ2aWNlcy1zdGFjayc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG5uZXcgQXdzTWljcm9zZXJ2aWNlc1N0YWNrKGFwcCwgJ0F3c01pY3Jvc2VydmljZXNTdGFjaycsIHtcclxuICAvKiBJZiB5b3UgZG9uJ3Qgc3BlY2lmeSAnZW52JywgdGhpcyBzdGFjayB3aWxsIGJlIGVudmlyb25tZW50LWFnbm9zdGljLlxyXG4gICAqIEFjY291bnQvUmVnaW9uLWRlcGVuZGVudCBmZWF0dXJlcyBhbmQgY29udGV4dCBsb29rdXBzIHdpbGwgbm90IHdvcmssXHJcbiAgICogYnV0IGEgc2luZ2xlIHN5bnRoZXNpemVkIHRlbXBsYXRlIGNhbiBiZSBkZXBsb3llZCBhbnl3aGVyZS4gKi9cclxuXHJcbiAgLyogVW5jb21tZW50IHRoZSBuZXh0IGxpbmUgdG8gc3BlY2lhbGl6ZSB0aGlzIHN0YWNrIGZvciB0aGUgQVdTIEFjY291bnRcclxuICAgKiBhbmQgUmVnaW9uIHRoYXQgYXJlIGltcGxpZWQgYnkgdGhlIGN1cnJlbnQgQ0xJIGNvbmZpZ3VyYXRpb24uICovXHJcbiAgLy8gZW52OiB7IGFjY291bnQ6IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX0FDQ09VTlQsIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfUkVHSU9OIH0sXHJcblxyXG4gIC8qIFVuY29tbWVudCB0aGUgbmV4dCBsaW5lIGlmIHlvdSBrbm93IGV4YWN0bHkgd2hhdCBBY2NvdW50IGFuZCBSZWdpb24geW91XHJcbiAgICogd2FudCB0byBkZXBsb3kgdGhlIHN0YWNrIHRvLiAqL1xyXG4gIGVudjogeyBhY2NvdW50OiAnMTY3MDMwNTc5MDg4JywgcmVnaW9uOiAndXMtZWFzdC0xJyB9LFxyXG5cclxuICAvKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvbGF0ZXN0L2d1aWRlL2Vudmlyb25tZW50cy5odG1sICovXHJcbn0pOyJdfQ==