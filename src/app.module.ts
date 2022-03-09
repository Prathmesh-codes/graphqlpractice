import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfiguration } from './config/typeorm.config';
import { TaskModule } from './task/task.module';


@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfiguration), TaskModule,
  
  GraphQLModule.forRoot<ApolloDriverConfig>({

    autoSchemaFile:true,
    driver:ApolloDriver,
    debug:false,
    playground:false,
  }),
  
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
