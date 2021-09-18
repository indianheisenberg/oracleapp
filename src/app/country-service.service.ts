import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryServiceService {
  constructor(private http: HttpClient) {}

  public getAllCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  public getCountryById(country: string) {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + country);
  }
}
