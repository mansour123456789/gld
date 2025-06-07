import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Competence } from '../competence/competence.entity';
import { LienProfessionnel } from '../link/link.entity';
import { Mission } from '../mission/mission.entity';

@ObjectType()
@Entity()
export class Freelancer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  fullName: string;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phone?: string;

  @OneToMany(() => Competence, c => c.freelancer)
  @Field(() => [Competence], { nullable: true })
  competences?: Competence[];

  @OneToMany(() => LienProfessionnel, l => l.freelancer)
  @Field(() => [LienProfessionnel], { nullable: true })
  liens?: LienProfessionnel[];

  @ManyToMany(() => Mission, mission => mission.freelancer)
  @JoinTable()
  @Field(() => [Mission], { nullable: true })
  missions?: Mission[];
} 