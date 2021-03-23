import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { ChoosePeriodModalComponent } from './modal/choose-period-modal/choose-period-modal.component';
import { SharedModule } from '../shared.module';
import { CompetencyInformationModalComponent } from './modal/competency-information-modal/competency-information-modal.component';

@NgModule({
  declarations: [MyLoaderComponent, ConfirmModalComponent, PageContainerComponent, ChoosePeriodModalComponent, CompetencyInformationModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DirectivesModule,
    PipesModule,
    SharedModule
  ],
  exports: [
    DirectivesModule, 
    PipesModule, 
    MyLoaderComponent, 
    PageContainerComponent,
    ConfirmModalComponent,
    ChoosePeriodModalComponent,
    CompetencyInformationModalComponent
  ],
  entryComponents: [
    ConfirmModalComponent,
    ChoosePeriodModalComponent,
    CompetencyInformationModalComponent
  ],
})
export class ComponentModule {}
