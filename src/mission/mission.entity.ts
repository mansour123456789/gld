import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Freelancer } from '../freelancer/freelancer.entity';

@ObjectType()
@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  titre: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  statut: string;

  @ManyToMany(() => Freelancer, (freelancer) => freelancer.missions)
  @Field(() => [Freelancer])
  freelancers: Freelancer[];
} 