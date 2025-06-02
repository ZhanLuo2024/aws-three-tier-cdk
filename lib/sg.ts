import { SecurityGroup, Peer, Port, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export function createSecurityGroups(scope: Construct, vpc: Vpc) {
  const webSg = new SecurityGroup(scope, 'WebSG', {
    vpc,
    description: 'Allow HTTP and SSH access',
    allowAllOutbound: true,
  });
  webSg.addIngressRule(Peer.anyIpv4(), Port.tcp(80), 'Allow HTTP');
  webSg.addIngressRule(Peer.anyIpv4(), Port.tcp(22), 'Allow SSH');

  const dbSg = new SecurityGroup(scope, 'DbSG', {
    vpc,
    description: 'Allow MySQL access from WebSG',
    allowAllOutbound: true,
  });
  dbSg.addIngressRule(webSg, Port.tcp(3306), 'Allow MySQL from WebSG');

  return { webSg, dbSg };
}