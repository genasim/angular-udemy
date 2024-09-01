import { Component } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from "./dashboard/dashboard.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutModule, DashboardModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
