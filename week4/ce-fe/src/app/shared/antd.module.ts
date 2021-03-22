import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IconsProviderModule } from '../icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    IconsProviderModule,
    NzDropDownModule,
    NzTableModule,
    NzSelectModule,
    NzDatePickerModule,
    NzResultModule,
    NzInputNumberModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    IconsProviderModule,
    NzDropDownModule,
    NzTableModule,
    NzSelectModule,
    NzDatePickerModule,
    NzResultModule,
    NzInputNumberModule
  ]
})
export class AntdModule { }
