import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  loadAvailablePlaces = () =>
    this.fetchPlaces(
      `${this.baseUrl}/places`,
      'Something went wrong while fetching available places :('
    );

  loadUserPlaces = () =>
    this.fetchPlaces(
      `${this.baseUrl}/user-places`,
      'Something went wrong while fetching your favorite places :('
    ).pipe(tap((userPlaces) => this.userPlaces.set(userPlaces)));

  addPlaceToUserPlaces = (place: Place) => {
    if (this.userPlaces().some((p) => p.id === place.id)) {
      return of({ userPlaces: this.userPlaces() });
    }

    this.userPlaces.update((places) => [...places, place]);

    return this.http
      .put<{ userPlaces: Place[] }>(`${this.baseUrl}/user-places`, {
        placeId: place.id,
      })
      .pipe(
        catchError(() => {
          this.userPlaces.update((places) =>
            places.filter((p) => p.id !== place.id)
          );
          return throwError(() => new Error('Failed to store selected place'));
        })
      );
  };

  removeUserPlace = (place: Place) => {
    const prevPlaces = this.userPlaces();
    if (!this.userPlaces().some((p) => p.id === place.id)) {
      return of({ userPlaces: this.userPlaces() });
    }
    
    this.userPlaces.set(prevPlaces.filter((p) => p.id !== place.id));

    return this.http
      .delete<{ userPlaces: Place[] }>(
        `${this.baseUrl}/user-places/${place.id}`
      )
      .pipe(
        catchError(() => {
          this.userPlaces.update(() => prevPlaces);
          return throwError(() => new Error('Failed to store selected place'));
        })
      );
  };

  private fetchPlaces = (url: string, errorMessage: string) =>
    this.http.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError((error) => {
        console.error(error);
        return throwError(() => new Error(errorMessage));
      })
    );

  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:3000';
}
