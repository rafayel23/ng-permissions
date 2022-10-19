import {
  Directive,
  Host,
  Inject,
  Input,
  Optional,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { ACCESS_MODULE, PERMISSION_MAP } from "./tokens";
import { AccessLevel, PermissionMap } from "./types";

@Directive({
  selector: "[accessLevel]",
})
export class AccessLevelDirective {

  constructor(
    private tmpRef: TemplateRef<null>,
    private viewRef: ViewContainerRef,

    @Inject(PERMISSION_MAP)
    private permissions: PermissionMap,

    @Inject(ACCESS_MODULE)
    private module: string
  ) {}


  @Input()
  set accessLevel(level: AccessLevel) {
    const hasAccess = this.permissions[this.module][level] === true;

    if (hasAccess) {
      this.viewRef.createEmbeddedView(this.tmpRef);
    } else {
      this.viewRef.clear();
    }     
  }
}
