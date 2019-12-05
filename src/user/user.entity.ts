import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['phone'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  session: string;

  @Column({ nullable: true })
  lastCode: Date;
}
