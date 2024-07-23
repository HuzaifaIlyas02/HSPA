import { Injectable } from '@angular/core';
import { Property } from '../../model/property';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { HousingService } from '../../services/housing.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailResolverService implements Resolve<Property | null> {
  constructor(private housingService: HousingService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Property | null> {
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId).pipe(
      map((property: Property | undefined) => {
        if (property) {
          return property;
        } else {
          this.router.navigate(['/']); // navigate away if property not found
          return null;
        }
      }),
      catchError(() => {
        this.router.navigate(['/']); // navigate away on error
        return of(null);
      })
    );
  }
}
