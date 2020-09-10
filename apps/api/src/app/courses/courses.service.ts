import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Course } from '../database/entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('COURSE_REPOSITORY')
    private coursesRepository: Repository<Course>,
  ) {}

  async getAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  // get(id: string): Course {
  //   return emptyCourse;
  // }
  // create(course: Course): Course {
  //   return emptyCourse;
  // }
  // update(course: Course): Course {
  //   return emptyCourse;
  // }
  // delete(id: string): Course {
  //   return emptyCourse;
  // }
}
