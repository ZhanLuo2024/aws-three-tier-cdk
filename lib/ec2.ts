import { Instance, InstanceType, InstanceClass, InstanceSize, MachineImage } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { SecurityGroup, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';

export function createEc2(scope: Construct, vpc: Vpc, webSg: SecurityGroup): Instance {
  return new Instance(scope, 'WebInstance', {
    vpc,
    vpcSubnets: { subnetType: SubnetType.PUBLIC },
    instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
    machineImage: MachineImage.latestAmazonLinux2023(),
    securityGroup: webSg,
    keyName: 'jumpbox-key',
  });
}