import { Country } from './../country';
import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  country: Country | undefined;

  constructor(
    private route: ActivatedRoute, 
    private countriesService: CountriesService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.countriesService.getByAlpha3Code(params.name).subscribe((cntr)=>{
        this.country = cntr;
      });      
    });
  }
}
