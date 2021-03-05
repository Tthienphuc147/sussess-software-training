import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [MyLoaderComponent, ConfirmModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [DirectivesModule, PipesModule, MyLoaderComponent],
  entryComponents: [],
})
export class ComponentModule {}
