import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateLinkInput } from './create-link.input';

@InputType()
export class UpdateLinkInput extends CreateLinkInput {
  @Field(() => Int)
  id: number;
} 