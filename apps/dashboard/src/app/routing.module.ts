import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@bba/ui-login';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonsComponent } from './lessons/lessons.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
