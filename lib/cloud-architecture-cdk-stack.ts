import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createVpc } from './vpc';
import { createSecurityGroups } from './sg';
import { createEc2 } from './ec2';
import { createAlb } from './alb';
import { createRds } from './rds';
import { createEc2Role } from './iam';

export class CloudArchitectureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = createVpc(this);

    const { webSg, dbSg } = createSecurityGroups(this, vpc);

    const instance = createEc2(this, vpc, webSg);

    const alb = createAlb(this, vpc, webSg, instance);

    const rds = createRds(this, vpc, dbSg);

    createEc2Role(this);
  }
}


