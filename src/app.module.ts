import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreelancerModule } from './freelancer/freelancer.module';
import { CompetenceModule } from './competence/competence.module';
import { LinkModule } from './link/link.module';
import { MissionModule } from './mission/mission.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // vide pour XAMPP
      database: 'freelance_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    FreelancerModule,
    CompetenceModule,
    LinkModule,
    MissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
