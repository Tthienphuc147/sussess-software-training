import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberManagerComponent } from './member-manager.component';
import { MemberViewComponent } from './member-view/member-view.component';

const routes: Routes = [
  {
    path: '',
    component: MemberManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: MemberListComponent
      },
      {
        path: 'view/:id',
        component:MemberViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberManagerRoutingModule { }
