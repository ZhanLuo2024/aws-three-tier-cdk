import { Role, ServicePrincipal, ManagedPolicy } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export function createEc2Role(scope: Construct): Role {
  const role = new Role(scope, 'Ec2SsmRole', {
    assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
  });

  role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));

  return role;
}