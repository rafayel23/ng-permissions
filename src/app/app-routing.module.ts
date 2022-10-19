import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadAccessGuard } from "./ng-permissions/read-access.guard";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  {
    path: "users",
    data: { module: "users" },
    canLoad: [ReadAccessGuard],
    loadChildren: () => import("./example-modules/users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "projects",
    data: { module: "projects" },
    canLoad: [ReadAccessGuard],
    loadChildren: () => import("./example-modules/projects/projects.module").then((m) => m.ProjectsModule),
  },
  {
    path: "groups",
    data: { module: "groups" },
    canLoad: [ReadAccessGuard],
    loadChildren: () => import("./example-modules/groups/groups.module").then((m) => m.GroupsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
