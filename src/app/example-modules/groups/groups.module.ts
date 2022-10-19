import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { NgPermissionsModule } from 'src/app/ng-permissions/ng-permissions.module';



@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: GroupsComponent }]),
    NgPermissionsModule.forModule('groups')
  ]
})
export class GroupsModule { }
