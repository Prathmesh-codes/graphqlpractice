import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task/task.repository';
import { TaskService } from './task/task.service';

@Module({
  providers: [TaskService],
  imports:[TypeOrmModule.forFeature([TaskRepository]),]
})
export class TaskModule {}
