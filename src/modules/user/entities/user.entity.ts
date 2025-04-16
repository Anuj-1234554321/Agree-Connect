import { UserRole } from 'src/common/enums/user.role';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER }) // ✅ Store roles using enum
  role?: UserRole;

  @CreateDateColumn()
  created_at: Date;
}
