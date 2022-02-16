import { Country } from '../country';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegion'
})
export class FilterRegionPipe implements PipeTransform {

  transform(value: Country[], input: string): Country[] {
    if(!value) return value;
    if(!input) return value;
    input = input.toLowerCase();
    if(input === 'all'){
      return value;
    }else{
      return value.filter( (country: Country) => {
        return country.region.toLowerCase().includes(input);
      });
    } 
  }

}
