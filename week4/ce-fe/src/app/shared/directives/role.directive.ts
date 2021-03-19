import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef,
  Renderer2
} from '@angular/core';
import { RoleGroup } from '../models/role/role-group.model';
import { AuthenticationService } from '../services/authenication.service';


@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {
  @Input() permission: RoleGroup[];
  @Input() targetObject?: any;

  constructor(
    private el: ElementRef,
    private authenticationService: AuthenticationService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private render: Renderer2
  ) {}

  ngOnInit() {
  }

  @Input()
  set appRole(val) {
    this.permission = val;
    this.checkPermission();
  }

  @Input()
  set appRoleIf(val) {
    let isPermission = false;
    for (const item of this.permission) {
      if (!item.key || this.authenticationService.getAuthenticationModel() &&
        this.authenticationService.getAuthenticationModel().role) {
        isPermission = true;
        return;
      }
    }
    if (val && isPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    for (const item of this.permission) {
      if (item.key &&  this.authenticationService.getAuthenticationModel() &&
        this.authenticationService.getAuthenticationModel().role.trim() === item.key ) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        return;
      }
    }
    this.viewContainer.clear();
  }

  private showElement(item: RoleGroup) {
    switch (item.status) {
      case 'show': {
        this.viewContainer.createEmbeddedView(this.templateRef);
        break;
      }
      case 'disabled': {
        this.viewContainer.createEmbeddedView(this.templateRef);
        if (this.el.nativeElement.nextElementSibling) {
          this.el.nativeElement.nextElementSibling.disabled = true;
        }
        break;
      }
      case 'hide': {
        this.viewContainer.clear();
        break;
      }
    }
  }
}
