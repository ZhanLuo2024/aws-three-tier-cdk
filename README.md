# AWS 3-Tier Architecture with CDK (TypeScript)

## Overview
This project demonstrates a 3-tier architecture built with AWS CDK using TypeScript. It includes a public-facing ALB, EC2-based web application layer, and a MySQL RDS backend database. Security groups, IAM roles, and modularized infrastructure code are included to mimic a real-world setup.

## Architecture Diagram
> ![Architecture Diagram](./assets/Architecture-Diagram.png)


## Components
- **VPC**: Public & private subnets across two AZs
- **ALB**: Internet-facing with listener targeting EC2
- **EC2**: Amazon Linux instance, SSH enabled (bastion or app)
- **RDS**: MySQL 8.0, deployed privately
- **IAM Role**: For EC2 to access SSM
- **Security Groups**: Isolated and minimal

## Folder Structure

```bash
.
├── bin/
│   └── cloud-architecture-cdk.ts     # Entry point
├── lib/
│   ├── vpc.ts                        # VPC + Subnets
│   ├── ec2.ts                        # EC2 Instance
│   ├── alb.ts                        # Application Load Balancer
│   ├── rds.ts                        # RDS MySQL
│   ├── sg.ts                         # Security Groups
│   ├── iam.ts                        # IAM Role for EC2
│   └── stack.ts                      # Stack assembly
├── cdk.json
├── package.json
└── README.md
```

## How to Use 

```bash
npm install
cdk synth
```

## Future Improvements

- Add CDK unit tests
- Integrate CI/CD with Github Actions
- Add monitoring and alarms (CloudWatch)

