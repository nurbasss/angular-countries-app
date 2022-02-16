import { Country } from './../country';
import { CountriesService } from '../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countriesList: Country[] | undefined;
  dropdownShow = false;
  region: string = '';

  constructor( private countriesService: CountriesService, private router: Router) { }
  inpCountry: string='';
  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries)=>{
      this.countriesList = countries;
    });
  }

  showDetails(country: Country){
    this.router.navigate(["/details/", country.alpha3Code.toLocaleLowerCase()]);
  }

  setRegion(newRegion: string){
    this.region = newRegion;
    this.toggleDropdown();
  }

  toggleDropdown(){
    this.dropdownShow = !this.dropdownShow;
  }


  
}
