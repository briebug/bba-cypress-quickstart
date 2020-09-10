#!/usr/bin/env node

const db = require('better-sqlite3')('database.sqlite', { verbose: console.log });

const courses = [
  {
    title: 'Angular Fundamentals',
    description: 'Pending',
    thumbnail: '/assets/images/course-card-default.png',
  },
  {
    title: 'RxJS Quickstart',
    description: 'Pending.',
    thumbnail: '/assets/images/course-card-default.png',
  },
  {
    title: 'Ionic Quickstart',
    description: 'Pending.',
    thumbnail: '/assets/images/course-card-default.png',
  }
];

const lessons = [
  {
    title: 'Welcome to Angular Fundamentals',
    description: 'Pending',
    videoUri: 'https://briebug-academy-prod.s3.amazonaws.com/01-rxjs-quickstart-introduction.mp4',
    courseId: null
  },
  {
    title: 'Welcome to RxJS Quickstart',
    description: 'Pending.',
    videoUri: 'https://briebug-academy-prod.s3.amazonaws.com/01-rxjs-quickstart-introduction.mp4',
    courseId: null
  },
  {
    title: 'Welcome to Ionic Quickstart',
    description: 'Pending.',
    videoUri: 'https://briebug-academy-prod.s3.amazonaws.com/01-rxjs-quickstart-introduction.mp4',
    courseId: null
  }
];

const users = [
  {
    title: 'Intern',
    role: 'user',
    description: 'Pending',
    firstName: 'Cole',
    lastName: 'Sanders',
    email: 'user@briebug.academy',
    password: 'insecure',
    profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/baires/128.jpg',
  },
  {
    title: 'Engineering Manager',
    role: 'manager',
    description: 'Pending.',
    firstName: 'Santa',
    lastName: 'Kling',
    email: 'manager@briebug.academy',
    password: 'insecure',
    profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/teeragit/128.jpg',
  },
  {
    title: 'Enterprise Developer',
    role: 'admin',
    description: 'Pending.',
    firstName: 'Thalia',
    lastName: 'Schulist',
    email: 'admin@briebug.academy',
    password: 'insecure',
    profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/meelford/128.jpg',
  }
];

const getCourseIds = () => {
  const stmt = db.prepare('SELECT id FROM course');
  return stmt.all();
};

const getEndChar = (key, arr) => {
  return (Object.is(arr.length - 1, key)) ? '\n' : ',\n'
};

const buildCourseRows = (courses) => {
  let rows = '';
  courses.forEach((course, key, arr) => {
    rows += `('${course.title}', '${course.description}', '${course.thumbnail}')`;
    rows += getEndChar(key, arr);
  });
  return rows;
};

const buildLessonRows = (lessons, courseIds) => {
  let rows = '';
  lessons.forEach((lesson, key, arr) => {
    const courseId = courseIds[Math.floor(Math.random()*courseIds.length)]['id'];
    rows += `('${lesson.title}', '${lesson.description}', '${lesson.videoUri}', '${courseId}')`;
    rows += getEndChar(key, arr);
  });
  return rows;
};

const buildUserRows = (users) => {
  let rows = '';
  users.forEach((user, key, arr) => {
    rows += `('${user.title}', '${user.role}', '${user.description}', '${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}', '${user.profilePic}')`;
    rows += getEndChar(key, arr);
  });
  return rows;
};

const insertCourses = (courses) => {
  const query = `INSERT INTO course (title, description, thumbnail)
    VALUES
    ${buildCourseRows(courses)};
  `;
  const stmt = db.prepare(query);
  stmt.run();
};

const insertLessons = (lessons) => {
  const query = `INSERT INTO lesson (title, description, videoUri, courseId)
    VALUES
    ${buildLessonRows(lessons, getCourseIds())};
  `;
  const stmt = db.prepare(query);
  stmt.run();
};

const insertUsers = (users) => {
  const query = `INSERT INTO user (title, role, description, firstName, lastName, email, password, profilePic)
    VALUES
    ${buildUserRows(users)};
  `;
  const stmt = db.prepare(query);
  stmt.run();
};

const clearTables = () => {
  const tables = ['user', 'lesson', 'course'];
  tables.forEach((table) => {
    const stmt = db.prepare(`DELETE FROM ${table}`);
    stmt.run();
  });
};

clearTables();

insertCourses(courses);
insertLessons(lessons);
insertUsers(users);

db.close();