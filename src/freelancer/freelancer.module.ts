import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Freelancer } from './freelancer.entity';
import { FreelancerResolver } from './freelancer.resolver';
import { FreelancerService } from './freelancer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Freelancer])],
  providers: [FreelancerResolver, FreelancerService],
})
export class FreelancerModule {}
