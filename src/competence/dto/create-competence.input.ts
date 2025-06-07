import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCompetenceInput {
  @Field()
  nom: string;

  @Field()
  niveau: string;

  @Field(() => Int)
  freelancerId: number;
} 