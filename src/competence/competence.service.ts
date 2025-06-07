import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Competence } from './competence.entity';
import { CreateCompetenceInput } from './dto/create-competence.input';
import { UpdateCompetenceInput } from './dto/update-competence.input';
import { Freelancer } from '../freelancer/freelancer.entity';

@Injectable()
export class CompetenceService {
  constructor(
    @InjectRepository(Competence)
    private competenceRepository: Repository<Competence>,
    @InjectRepository(Freelancer)
    private freelancerRepository: Repository<Freelancer>,
  ) {}

  async create(createCompetenceInput: CreateCompetenceInput): Promise<Competence> {
    const freelancer = await this.freelancerRepository.findOne({
      where: { id: createCompetenceInput.freelancerId },
    });
    
    if (!freelancer) {
      throw new NotFoundException(`Freelancer #${createCompetenceInput.freelancerId} not found`);
    }

    const competence = this.competenceRepository.create(createCompetenceInput);
    competence.freelancer = freelancer;
    
    return this.competenceRepository.save(competence);
  }

  async findAll(): Promise<Competence[]> {
    return this.competenceRepository.find({
      relations: ['freelancer'],
    });
  }

  async findOne(id: number): Promise<Competence> {
    const competence = await this.competenceRepository.findOne({
      where: { id },
      relations: ['freelancer'],
    });
    if (!competence) {
      throw new NotFoundException(`Competence #${id} not found`);
    }
    return competence;
  }

  async update(id: number, updateCompetenceInput: UpdateCompetenceInput): Promise<Competence> {
    const competence = await this.findOne(id);
    const freelancer = await this.freelancerRepository.findOne({
      where: { id: updateCompetenceInput.freelancerId },
    });
    
    if (!freelancer) {
      throw new NotFoundException(`Freelancer #${updateCompetenceInput.freelancerId} not found`);
    }

    Object.assign(competence, updateCompetenceInput);
    competence.freelancer = freelancer;
    
    return this.competenceRepository.save(competence);
  }

  async remove(id: number): Promise<Competence> {
    const competence = await this.findOne(id);
    return this.competenceRepository.remove(competence);
  }
}
