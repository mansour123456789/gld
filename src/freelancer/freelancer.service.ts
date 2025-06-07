import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Freelancer } from './freelancer.entity';
import { CreateFreelancerInput } from './dto/create-freelancer.input';
import { UpdateFreelancerInput } from './dto/update-freelancer.input';

@Injectable()
export class FreelancerService {
  constructor(
    @InjectRepository(Freelancer)
    private freelancerRepository: Repository<Freelancer>,
  ) {}

  async create(createFreelancerInput: CreateFreelancerInput): Promise<Freelancer> {
    const freelancer = this.freelancerRepository.create(createFreelancerInput);
    return this.freelancerRepository.save(freelancer);
  }

  async findAll(): Promise<Freelancer[]> {
    return this.freelancerRepository.find();
  }

  async findOne(id: number): Promise<Freelancer> {
    const freelancer = await this.freelancerRepository.findOne({ where: { id } });
    if (!freelancer) {
      throw new NotFoundException(`Freelancer #${id} not found`);
    }
    return freelancer;
  }

  async update(id: number, updateFreelancerInput: UpdateFreelancerInput): Promise<Freelancer> {
    const freelancer = await this.findOne(id);
    Object.assign(freelancer, updateFreelancerInput);
    return this.freelancerRepository.save(freelancer);
  }

  async remove(id: number): Promise<Freelancer> {
    const freelancer = await this.findOne(id);
    return this.freelancerRepository.remove(freelancer);
  }
}
