import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository:TaskRepository,
    ){}

 async createTask(title:string,description:string,status:string,reminderNeeded:boolean,location:string)  {

    const task= await this.taskRepository.createTask(title,description,status,reminderNeeded,location);
 

return task;
} 
 async getTasks(){

    return await this.taskRepository.find();
 }

}
