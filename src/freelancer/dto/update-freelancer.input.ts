import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateFreelancerInput } from './create-freelancer.input';

@InputType()
export class UpdateFreelancerInput extends CreateFreelancerInput {
  @Field(() => Int)
  id: number;
} 