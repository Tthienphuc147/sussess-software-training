import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencyCreateComponent } from './competency-create/competency-create.component';
import { CompetencyEditComponent } from './competency-edit/competency-edit.component';
import { CompetencyListComponent } from './competency-list/competency-list.component';
import { CompetencyManagerComponent } from './competency-manager.component';

const routes: Routes = [
  {
    path: '',
    component: CompetencyManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: CompetencyListComponent
      },
      {
        path: 'create',
        component: CompetencyCreateComponent
      },
      {
        path: 'edit/:id',
        component: CompetencyEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetencyManagerRoutingModule { }
