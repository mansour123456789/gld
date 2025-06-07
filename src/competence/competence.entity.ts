import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Freelancer } from '../freelancer/freelancer.entity';

@ObjectType()
@Entity()
export class Competence {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  nom: string;

  @Column()
  @Field()
  niveau: string;

  @ManyToOne(() => Freelancer, freelancer => freelancer.competences)
  @Field(() => Freelancer)
  freelancer: Freelancer;
} 