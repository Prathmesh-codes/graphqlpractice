import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { of } from "rxjs";
import { TaskService } from "./task.service";
import { TaskType } from "./task.type";

@Resolver((of)=>TaskType)
export class TaskResolver{


    constructor(private taskService:TaskService){

    }
    @Query((returns)=>[TaskType])
    async tasks()
    {

        return await this.taskService.getTasks();
    }

    @Mutation((returns) => TaskType)
    async createTask(
    @Args('title') title:string,
    @Args('description') description:string,
    @Args('status') status:string,
    @Args(' reminderNeeded') reminderNeeded:boolean,
    @Args('location') location:string,


    ){

        return await this.taskService.createTask(title,description,status,reminderNeeded,location);
    }

}