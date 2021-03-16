import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociateCreateComponent } from './associate-create/associate-create.component';
import { AssociateEditComponent } from './associate-edit/associate-edit.component';
import { AssociateListComponent } from './associate-list/associate-list.component';
import { AssociateManagerComponent } from './associate-manager.component';

const routes: Routes = [
  {
    path: '',
    component: AssociateManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: AssociateListComponent
      },
      {
        path: 'create',
        component: AssociateCreateComponent,
      },
      {
        path: 'edit/:id',
        component: AssociateEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociateManagerRoutingModule { }
