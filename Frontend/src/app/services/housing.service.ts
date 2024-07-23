import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map((propertiesArray) => {
        // throw new Error('Some error');
        return propertiesArray.find((p) => p.Id === id);
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http
      .get<{ [key: string]: Property }>('assets/data/properties.json')
      .pipe(
        map((data) => {
          const propertiesArray: Array<Property> = [];

          const localProperties = JSON.parse(
            localStorage.getItem('newProp') as string
          );

          if (localProperties) {
            for (const id in localProperties) {
              if (SellRent) {
                if (
                  localProperties.hasOwnProperty(id) &&
                  localProperties[id].SellRent === SellRent
                ) {
                  propertiesArray.push(localProperties[id]);
                }
              } else {
                propertiesArray.push(localProperties[id]);
              }
            }
          }

          for (const id in data) {
            if (SellRent) {
              if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
                propertiesArray.push(data[id]);
              }
            } else {
              propertiesArray.push(data[id]);
            }
          }
          return propertiesArray;
        })
      );
    return this.http.get<Property[]>('assets/data/properties.json');
  }

  addProperty(property: Property) {
    let newProp = [property];

    if (localStorage.getItem('newProp')) {
      newProp = [
        property,
        ...JSON.parse(localStorage.getItem('newProp') as string),
      ];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    const pid = localStorage.getItem('PID') ?? '101';
    localStorage.setItem('PID', String(+pid + 1));
    return +pid;
  }
}
