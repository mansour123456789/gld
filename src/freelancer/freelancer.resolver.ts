import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Freelancer } from './freelancer.entity';
import { CreateFreelancerInput } from './dto/create-freelancer.input';
import { UpdateFreelancerInput } from './dto/update-freelancer.input';
import { FreelancerService } from './freelancer.service';

@Resolver(() => Freelancer)
export class FreelancerResolver {
  constructor(private readonly freelancerService: FreelancerService) {}

  @Query(() => [Freelancer])
  async freelancers(): Promise<Freelancer[]> {
    return this.freelancerService.findAll();
  }

  @Query(() => Freelancer, { nullable: true })
  async freelancer(@Args('id', { type: () => Int }) id: number): Promise<Freelancer> {
    return this.freelancerService.findOne(id);
  }

  @Mutation(() => Freelancer)
  async createFreelancer(
    @Args('createFreelancerInput') createFreelancerInput: CreateFreelancerInput,
  ): Promise<Freelancer> {
    return this.freelancerService.create(createFreelancerInput);
  }

  @Mutation(() => Freelancer)
  async updateFreelancer(
    @Args('updateFreelancerInput') updateFreelancerInput: UpdateFreelancerInput,
  ): Promise<Freelancer> {
    return this.freelancerService.update(updateFreelancerInput.id, updateFreelancerInput);
  }

  @Mutation(() => Freelancer)
  async removeFreelancer(@Args('id', { type: () => Int }) id: number): Promise<Freelancer> {
    return this.freelancerService.remove(id);
  }
}
