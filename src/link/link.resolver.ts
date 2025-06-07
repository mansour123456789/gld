import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LienProfessionnel } from './link.entity';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { LinkService } from './link.service';

@Resolver(() => LienProfessionnel)
export class LinkResolver {
  constructor(private readonly linkService: LinkService) {}

  @Query(() => [LienProfessionnel])
  async liens(): Promise<LienProfessionnel[]> {
    return this.linkService.findAll();
  }

  @Query(() => LienProfessionnel, { nullable: true })
  async lien(@Args('id', { type: () => Int }) id: number): Promise<LienProfessionnel> {
    return this.linkService.findOne(id);
  }

  @Mutation(() => LienProfessionnel)
  async createLien(
    @Args('createLinkInput') createLinkInput: CreateLinkInput,
  ): Promise<LienProfessionnel> {
    return this.linkService.create(createLinkInput);
  }

  @Mutation(() => LienProfessionnel)
  async updateLien(
    @Args('updateLinkInput') updateLinkInput: UpdateLinkInput,
  ): Promise<LienProfessionnel> {
    return this.linkService.update(updateLinkInput.id, updateLinkInput);
  }

  @Mutation(() => LienProfessionnel)
  async removeLien(@Args('id', { type: () => Int }) id: number): Promise<LienProfessionnel> {
    return this.linkService.remove(id);
  }
}
