import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mission } from './mission.entity';
import { CreateMissionInput } from './dto/create-mission.input';
import { UpdateMissionInput } from './dto/update-mission.input';
import { Freelancer } from '../freelancer/freelancer.entity';

@Injectable()
export class MissionService {
  constructor(
    @InjectRepository(Mission)
    private missionRepository: Repository<Mission>,
    @InjectRepository(Freelancer)
    private freelancerRepository: Repository<Freelancer>,
  ) {}

  async create(createMissionInput: CreateMissionInput): Promise<Mission> {
    const mission = this.missionRepository.create(createMissionInput);
    
    if (createMissionInput.freelancerIds) {
      const freelancers = await this.freelancerRepository.findByIds(createMissionInput.freelancerIds);
      mission.freelancers = freelancers;
    }
    
    return this.missionRepository.save(mission);
  }

  async findAll(): Promise<Mission[]> {
    return this.missionRepository.find({
      relations: ['freelancers'],
    });
  }

  async findOne(id: number): Promise<Mission> {
    const mission = await this.missionRepository.findOne({
      where: { id },
      relations: ['freelancers'],
    });
    if (!mission) {
      throw new NotFoundException(`Mission #${id} not found`);
    }
    return mission;
  }

  async update(id: number, updateMissionInput: UpdateMissionInput): Promise<Mission> {
    const mission = await this.findOne(id);
    Object.assign(mission, updateMissionInput);
    
    if (updateMissionInput.freelancerIds) {
      const freelancers = await this.freelancerRepository.findByIds(updateMissionInput.freelancerIds);
      mission.freelancers = freelancers;
    }
    
    return this.missionRepository.save(mission);
  }

  async remove(id: number): Promise<Mission> {
    const mission = await this.findOne(id);
    return this.missionRepository.remove(mission);
  }
}
