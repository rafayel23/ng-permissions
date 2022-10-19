import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessLevelDirective } from "./access-level.directive";
import { ACCESS_MODULE, PERMISSION_MAP } from "./tokens";
import { AccessModuleDirective } from "./access-module.directive";
import { PermissionMap } from "./types";

@NgModule({
  declarations: [AccessLevelDirective, AccessModuleDirective],
  imports: [CommonModule],
  exports: [AccessLevelDirective, AccessModuleDirective],
})
export class NgPermissionsModule {

  static forModule(module: string): ModuleWithProviders<NgPermissionsModule> {
    return {
      ngModule: NgPermissionsModule,
      providers: [
        {
          provide: ACCESS_MODULE,
          useValue: module,
        },
      ],
    };
  }

  static forRoot(
    permissions: PermissionMap
  ): ModuleWithProviders<NgPermissionsModule> {
    return {
      ngModule: NgPermissionsModule,
      providers: [
        {
          provide: PERMISSION_MAP,
          useValue: permissions,
        },
      ],
    };
  }
}
