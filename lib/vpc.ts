import { Vpc, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export function createVpc(scope: Construct): Vpc {
  return new Vpc(scope, 'MyVpc', {
    maxAzs: 2,
    subnetConfiguration: [
      {
        cidrMask: 24,
        name: 'public-subnet',
        subnetType: SubnetType.PUBLIC,
      },
      {
        cidrMask: 24,
        name: 'private-subnet',
        subnetType: SubnetType.PRIVATE_WITH_EGRESS,
      },
    ],
  });
}