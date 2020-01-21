import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ], exports: [TestComponent]
})
export class NewModuleTranslateModule { }
