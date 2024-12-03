import { Role } from 'src/utils/user-roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column()
  profilePicture: string;

  @Column({ type: 'enum', enum: Role, default:Role.USER})
  role: Role

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt: Date;
  

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  editedAt: Date;

}
