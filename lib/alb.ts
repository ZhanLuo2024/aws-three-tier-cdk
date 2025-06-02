import { ApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { InstanceTarget } from 'aws-cdk-lib/aws-elasticloadbalancingv2-targets';
import { Vpc, Instance, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export function createAlb(scope: Construct, vpc: Vpc, albSg: SecurityGroup, instance: Instance) {
  const alb = new ApplicationLoadBalancer(scope, 'MyALB', {
    vpc,
    securityGroup: albSg,
    internetFacing: true,
  });

  const listener = alb.addListener('HttpListener', {
    port: 80,
    open: true,
  });

  listener.addTargets('AppTargetGroup', {
    port: 80,
    targets: [new InstanceTarget(instance)],
  });

  return alb;
}
