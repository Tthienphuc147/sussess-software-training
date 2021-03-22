import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './exception/page-not-found/page-not-found.component';
import { PageNotPermissionComponent } from './exception/page-not-permission/page-not-permission.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [
      LoginGuard,
    ],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'page-not-permission',
    component: PageNotPermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
