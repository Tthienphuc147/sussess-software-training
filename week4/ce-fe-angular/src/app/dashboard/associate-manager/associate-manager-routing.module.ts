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
        redirectTo: 'associate-list',
        pathMatch: 'full'
      },
      {
        path: 'associate-list',
        component: AssociateListComponent
      },
      {
        path: 'associate-create',
        component: AssociateCreateComponent,
      },
      {
        path: 'associate-edit:/id',
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
