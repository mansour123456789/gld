import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Competence } from './competence.entity';
import { CompetenceResolver } from './competence.resolver';
import { CompetenceService } from './competence.service';
import { Freelancer } from '../freelancer/freelancer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competence, Freelancer])],
  providers: [CompetenceResolver, CompetenceService],
})
export class CompetenceModule {}
