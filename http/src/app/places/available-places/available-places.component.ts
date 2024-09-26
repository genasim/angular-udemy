import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit, OnDestroy {
  places = signal<Place[] | undefined>(undefined);

  isLoading = signal(false);
  error = signal<Error | null>(null);

  private placesService = inject(PlacesService);

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.isLoading.set(true);
    this.placesService
      .loadAvailablePlaces()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
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

  private cleanupSubscriptions() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelectedPlace(place: Place) {
    this.placesService
      .addPlaceToUserPlaces(place)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        error: (err) => {
          console.error(err);
        },
      });
  }
}
