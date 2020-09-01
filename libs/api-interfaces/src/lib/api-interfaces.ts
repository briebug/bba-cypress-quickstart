export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface Author extends BaseEntity {
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  courses?: Course[];
}

export interface Course extends BaseEntity {
  title: string;
  description: string;
  thumbnail: string;
  authorId: any;
  author?: Author;
  lessons?: Lesson[];
}

export interface Lesson extends BaseEntity {
  title: string;
  description: string;
  videoUri: string;
  courseId: any;
}

export interface User extends BaseEntity {
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic: string;
  currentLessonId: any;
  coursesCompleted: number;
  lessonsCompleted: number;
  currentCourse?: Course;
  currentLesson?: Lesson;
}
