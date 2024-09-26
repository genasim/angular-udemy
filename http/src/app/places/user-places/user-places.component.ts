import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit, OnDestroy {
  isLoading = signal(false);
  error = signal<Error | null>(null);
  
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.isLoading.set(true);
    this.placesService 
      .loadUserPlaces()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        error: (err) => {
          console.error(err);
          this.error.set(err);
        },
        complete: () => { 
          this.isLoading.set(false);
        },
      });
  }

  ngOnDestroy(): void {
    this.cleanupSubscriptions();
  }

  onSelectedPlace(place: Place) { 
    this.placesService.removeUserPlace(place).subscribe()
  }

  private cleanupSubscriptions() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
