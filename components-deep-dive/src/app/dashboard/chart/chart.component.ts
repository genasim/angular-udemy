import { Component, Input } from '@angular/core';
import { Traffic } from '../traffic-data.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  @Input() trafficData: Traffic[] = [];

  get maxTraffic() {
    return Math.max(...this.trafficData.map((data) => data.value));
  }
}
