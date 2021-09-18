import { CountryServiceService } from './country-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oracleapp';

  countryList: any;
  countryName: string = '';

  constructor(private countryServiceService: CountryServiceService) {}

  ngOnInit() {
    this.countryServiceService
      .getAllCountries()
      .toPromise()
      .then((countries) => {
        this.countryList = countries;
      });
  }

  findCountryByName(countryName: string) {
    this.countryServiceService
      .getCountryById(countryName)
      .toPromise()
      .then((countries) => {
        this.countryList = countries;
      });
  }
}
