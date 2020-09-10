import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lesson } from '../database/entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @Inject('LESSON_REPOSITORY')
    private lessonsRepository: Repository<Lesson>,
  ) {}

  async getAll(): Promise<Lesson[]> {
    return this.lessonsRepository.find();
  }

  // get(id: string): Lesson {
  //   return emptyLesson;
  // }
  // create(lesson: Lesson): Lesson {
  //   return emptyLesson;
  // }
  // update(lesson: Lesson): Lesson {
  //   return emptyLesson;
  // }
  // delete(id: string): Lesson {
  //   return emptyLesson;
  // }
}
