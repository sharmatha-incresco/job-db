import { Module } from '@nestjs/common';
import { JobsModule } from './job/jobs.module';
import { JobsController } from './job/jobs.controller';
import { JobsService } from './job/jobs.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), JobsModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class AppModule {}

