import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LienProfessionnel } from './link.entity';
import { LinkResolver } from './link.resolver';
import { LinkService } from './link.service';

@Module({
  imports: [TypeOrmModule.forFeature([LienProfessionnel])],
  providers: [LinkResolver, LinkService],
})
export class LinkModule {}
