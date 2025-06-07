import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateMissionInput {
  @Field()
  titre: string;

  @Field()
  description: string;

  @Field(() => [Int], { nullable: true })
  freelancerIds?: number[];
} 