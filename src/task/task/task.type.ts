import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('task')
export class TaskType{

    @Field(type=>ID)
    id:number;

    @Field()
    title:string;

    @Field()
    description:string;

    @Field()
    status:string;

    @Field()
    reminderNeeded:boolean;

    @Field()
    location:string;

}