import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { PageContainerComponent } from './page-container/page-container.component';

@NgModule({
  declarations: [MyLoaderComponent, ConfirmModalComponent, PageContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [DirectivesModule, PipesModule, MyLoaderComponent, PageContainerComponent],
  entryComponents: [],
})
export class ComponentModule {}
