import { DatabaseInstance, DatabaseInstanceEngine, MysqlEngineVersion } from 'aws-cdk-lib/aws-rds';
import { InstanceType, SubnetType, Vpc, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export function createRds(scope: Construct, vpc: Vpc, dbSg: SecurityGroup): DatabaseInstance {
  return new DatabaseInstance(scope, 'MyRdsInstance', {
    engine: DatabaseInstanceEngine.mysql({ version: MysqlEngineVersion.VER_8_0 }),
    vpc,
    instanceType: new InstanceType('t3.micro'),
    vpcSubnets: { subnetType: SubnetType.PRIVATE_WITH_EGRESS },
    securityGroups: [dbSg],
    allocatedStorage: 20,
    publiclyAccessible: false,
    multiAz: false,
    deletionProtection: false,
    autoMinorVersionUpgrade: true,
    databaseName: 'MyAppDb',
  });
}