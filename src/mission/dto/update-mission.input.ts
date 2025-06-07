import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateMissionInput } from './create-mission.input';

@InputType()
export class UpdateMissionInput extends CreateMissionInput {
  @Field(() => Int)
  id: number;
} 