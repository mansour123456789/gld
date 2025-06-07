import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateLinkInput {
  @Field()
  titre: string;

  @Field()
  url: string;

  @Field(() => Int)
  freelancerId: number;
} 