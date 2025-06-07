import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFreelancerInput {
  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phone?: string;
} 