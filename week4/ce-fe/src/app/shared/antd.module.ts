import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IconsProviderModule } from '../icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    IconsProviderModule,
    NzDropDownModule,
    NzTableModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    IconsProviderModule,
    NzDropDownModule,
    NzTableModule
  ]
})
export class AntdModule { }
