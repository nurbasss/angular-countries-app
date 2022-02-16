import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country';

@Pipe({
  name: 'FilterCountryPipe'
})
export class FilterCountryPipe implements PipeTransform {

  transform(value: Country[], input: string): Country[] {
  
    if(!value) return value;
    if(!input) return value;
    input = input.toLowerCase();

    return value.filter( (country: Country) => {
      return country.name.toLowerCase().includes(input) || country.alpha3Code.toLocaleLowerCase().includes(input);
    });
  }

}
