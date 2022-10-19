import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { RouterModule } from "@angular/router";
import { NgPermissionsModule } from "src/app/ng-permissions/ng-permissions.module";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: UsersComponent }]),
    NgPermissionsModule.forModule('users')
  ],
})
export class UsersModule {}
