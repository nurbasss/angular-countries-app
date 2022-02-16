import { Country } from '../country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  apiUrl:string = "https://restcountries.com/v2";


  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<any>(this.apiUrl + '/all' + '?fields=name,capital,region,population,flags,alpha3Code');
  }
  

  getByAlpha3Code(countryName: string): Observable<Country> {
    return this.http.get<any>(this.apiUrl + `/alpha/${countryName}`);
  }

}
