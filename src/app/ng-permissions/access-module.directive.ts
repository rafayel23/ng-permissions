import { Directive, Input } from "@angular/core";
import { ACCESS_MODULE } from "./tokens";

/* Use this directive in case you need to override ACCESS_MODULE provider defined by "NgPermissionsModule.forModule(...)" static method */
@Directive({
  selector: "[accessModule]",
  providers: [
    {
      provide: ACCESS_MODULE,
      deps: [AccessModuleDirective],
      useFactory: (host: AccessModuleDirective) => {
        return host.accessModule;
      },
    },
  ],
})
export class AccessModuleDirective {
  @Input()
  accessModule: string;
}
