import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';


@NgModule({
  // all component in the Module (imported in the top)
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  // Dependencies Injection of the components in this module
  providers: [
    CoursesService // create a singleton of the dependency used by coursesComponent (imported in the top)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
