import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateCompetenceInput } from './create-competence.input';

@InputType()
export class UpdateCompetenceInput extends CreateCompetenceInput {
  @Field(() => Int)
  id: number;
} 