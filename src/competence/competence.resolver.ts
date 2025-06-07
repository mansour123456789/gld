import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Competence } from './competence.entity';
import { CreateCompetenceInput } from './dto/create-competence.input';
import { UpdateCompetenceInput } from './dto/update-competence.input';
import { CompetenceService } from './competence.service';

@Resolver(() => Competence)
export class CompetenceResolver {
  constructor(private readonly competenceService: CompetenceService) {}

  @Query(() => [Competence])
  async competences(): Promise<Competence[]> {
    return this.competenceService.findAll();
  }

  @Query(() => Competence, { nullable: true })
  async competence(@Args('id', { type: () => Int }) id: number): Promise<Competence> {
    return this.competenceService.findOne(id);
  }

  @Mutation(() => Competence)
  async createCompetence(
    @Args('createCompetenceInput') createCompetenceInput: CreateCompetenceInput,
  ): Promise<Competence> {
    return this.competenceService.create(createCompetenceInput);
  }

  @Mutation(() => Competence)
  async updateCompetence(
    @Args('updateCompetenceInput') updateCompetenceInput: UpdateCompetenceInput,
  ): Promise<Competence> {
    return this.competenceService.update(updateCompetenceInput.id, updateCompetenceInput);
  }

  @Mutation(() => Competence)
  async removeCompetence(@Args('id', { type: () => Int }) id: number): Promise<Competence> {
    return this.competenceService.remove(id);
  }
}
