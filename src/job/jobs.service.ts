import { Injectable } from '@nestjs/common';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { db, Table } from './db.config';
import { Console } from 'console';

@Injectable()
export class JobsService {
  private readonly dynamoDB: DynamoDB.DocumentClient;
  private readonly tableName: string = 'job'; // Replace with your DynamoDB table name

  constructor() {
    this.dynamoDB = new DynamoDB.DocumentClient({
      accessKeyId: 'AKIATVV33ZI2FFRUWEBN',
      secretAccessKey: 'SdrvSjAb+OrvwZHISGQpLDpHwQKYgj1yCf2N+liw',
      region: 'ap-south-1'
    });
  }

  async getAllJobs(pageSize: number = 6, lastEvaluatedKey?: DynamoDB.DocumentClient.Key): Promise<any[]> {
    const params = {
      TableName: this.tableName,
      Limit: pageSize,
      ExclusiveStartKey: lastEvaluatedKey,
     
    };

    const { Items, LastEvaluatedKey } = await this.dynamoDB.scan(params).promise();

    if (LastEvaluatedKey) {
      const remainingItems = await this.getAllJobs(pageSize, LastEvaluatedKey);
      return [...Items, ...remainingItems];
    }
   console.log(Items);
    return Items;
  }

  async createJob(position: string, company: string, location: string): Promise<any> {
    const jobData = {
      position,
      company,
      location,
    };

    const params = {
      TableName: this.tableName,
      Item: jobData,
    };
  
    await this.dynamoDB.put(params).promise();
    return jobData;
  }
}
