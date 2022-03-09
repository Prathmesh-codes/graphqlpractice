import { EntityRepository, Repository } from "typeorm";

import { TaskEntity } from "./task.entity";
import { Taskstatus } from "./task.enum";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity>{





async createTask(title:string,description:string,status:string,reminderNeeded:boolean,location:string){


const task=new TaskEntity()
task.title=title;
task.description=description;
task.status=Taskstatus.OPEN;
task.reminderNeeded=reminderNeeded;
task.location=location;


await task.save();
return task;

}
}