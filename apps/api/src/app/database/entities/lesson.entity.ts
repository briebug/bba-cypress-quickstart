import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  videoUri: string;

  @Column()
  courseId: number;

  @ManyToOne(() => Course)
  @JoinColumn({ name: "courseId" })
  course: Course;
}
