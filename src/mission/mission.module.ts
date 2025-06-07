import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mission } from './mission.entity';
import { MissionResolver } from './mission.resolver';
import { MissionService } from './mission.service';
import { Freelancer } from '../freelancer/freelancer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mission, Freelancer])],
  providers: [MissionResolver, MissionService],
})
export class MissionModule {}
