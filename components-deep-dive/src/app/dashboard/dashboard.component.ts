import { Component } from '@angular/core';
import { ServerStatus } from './server-status/server-status';
import { DUMMY_TRAFFIC_DATA } from './traffic-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dummyTrafficData = DUMMY_TRAFFIC_DATA;
  
  currentStatus: ServerStatus = ServerStatus.Online;
}
