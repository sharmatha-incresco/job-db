import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import {Jobs} from '../uder.dto'

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get('')
  async getAllJobs(): Promise<any[]> {

    const alluser = await this.jobsService.getAllJobs();
    return alluser
  }

  // @Post()
  // async createJob(
  //   @Body('position') position: string,
  //   @Body('company') company: string,
  //   @Body('location') location: string,
  // ): Promise<any> {
  //   return this.jobsService.createJob(position, company, location);
  // }
}
