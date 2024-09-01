import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from '../shared/button/button.component';

@NgModule({
  imports: [ButtonComponent],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class LayoutModule {}