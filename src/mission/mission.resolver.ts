import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Mission } from './mission.entity';
import { CreateMissionInput } from './dto/create-mission.input';
import { UpdateMissionInput } from './dto/update-mission.input';
import { MissionService } from './mission.service';

@Resolver(() => Mission)
export class MissionResolver {
  constructor(private readonly missionService: MissionService) {}

  @Query(() => [Mission])
  async missions(): Promise<Mission[]> {
    return this.missionService.findAll();
  }

  @Query(() => Mission, { nullable: true })
  async mission(@Args('id', { type: () => Int }) id: number): Promise<Mission> {
    return this.missionService.findOne(id);
  }

  @Mutation(() => Mission)
  async createMission(
    @Args('createMissionInput') createMissionInput: CreateMissionInput,
  ): Promise<Mission> {
    return this.missionService.create(createMissionInput);
  }

  @Mutation(() => Mission)
  async updateMission(
    @Args('updateMissionInput') updateMissionInput: UpdateMissionInput,
  ): Promise<Mission> {
    return this.missionService.update(updateMissionInput.id, updateMissionInput);
  }

  @Mutation(() => Mission)
  async removeMission(@Args('id', { type: () => Int }) id: number): Promise<Mission> {
    return this.missionService.remove(id);
  }
}
