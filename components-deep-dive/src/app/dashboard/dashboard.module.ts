import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerStatusComponent } from './server-status/server-status.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ButtonComponent } from '../shared/button/button.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { ControlComponent } from "../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServerStatusComponent,
    ChartComponent,
    DashboardComponent,
    TicketFormComponent,
    DashboardItemComponent,
    TicketsComponent,
  ],
  imports: [CommonModule, ButtonComponent, ControlComponent, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
