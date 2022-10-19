import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { NgPermissionsModule } from 'src/app/ng-permissions/ng-permissions.module';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ProjectsComponent }]),
    NgPermissionsModule.forModule('projects')
  ]
})
export class ProjectsModule { }
