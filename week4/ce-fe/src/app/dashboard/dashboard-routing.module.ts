import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountInformationComponent } from './account-information/account-information.component';
import { CompetencyMappingManagerComponent } from './competency-mapping-manager/competency-mapping-manager.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'account-information',
        pathMatch: 'full'
      },
      {
        path: 'account-information',
        component: AccountInformationComponent
      },
      {
        path: 'associate-manager',
        loadChildren: () => import('./associate-manager/associate-manager.module').then(mod => mod.AssociateManagerModule)
      },
      {
        path: 'competency-manager',
        loadChildren: () => import('./competency-manager/competency-manager.module').then(mod => mod.CompetencyManagerModule)
      },
      {
        path: 'evaluation-member-manager',
        loadChildren: () => import('./elvaluation-member-manager/elvaluation-member-manager.module').then(mod => mod.ElvaluationMemberManagerModule)
      },
      {
        path: 'evaluation-manager',
        loadChildren: () => import('./evaluation-manager/evaluation-manager.module').then(mod => mod.EvaluationManagerModule)
      },
      {
        path: 'evaluation-period-manager',
        loadChildren: () => import('./evaluation-period-manager/evaluation-period-manager.module').then(mod => mod.EvaluationPeriodManagerModule)
      },
      {
        path: 'member-manager',
        loadChildren: () => import('./member-manager/member-manager.module').then(mod => mod.MemberManagerModule)
      },
      {
        path: 'competency-mapping-manager',
        component: CompetencyMappingManagerComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
