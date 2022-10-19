import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route } from "@angular/router";
import { NgPermissionsModule } from "./ng-permissions.module";
import { PERMISSION_MAP } from "./tokens";
import { PermissionMap } from "./types";

@Injectable({
  providedIn: NgPermissionsModule,
})
export class ReadAccessGuard implements CanActivate, CanLoad {
  constructor(
    @Inject(PERMISSION_MAP)
    private permissions: PermissionMap,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.permissions[route.data['module']].read;
  }

  canLoad(route: Route): boolean {
    return this.permissions[route.data['module']].read;
  }
}
