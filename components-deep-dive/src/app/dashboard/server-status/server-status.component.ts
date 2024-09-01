import { Component, DestroyRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ServerStatus } from './server-status';

// type Interval = ReturnType<typeof setInterval>;

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: ServerStatus = ServerStatus.Unknown;
  statuses = ServerStatus;

  // private intervalId!: Interval;

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit() {
    this.startStatusTimer();    
  }

  private startStatusTimer() {
    const intervalId = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = ServerStatus.Online;
      } else if (random < 0.9) {
        this.currentStatus = ServerStatus.Offline;
      } else {
        this.currentStatus = ServerStatus.Unknown;
      }
    }, 2000);
    
    this.destroyRef.onDestroy(() => clearInterval(intervalId));
  }


  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  // }
}
