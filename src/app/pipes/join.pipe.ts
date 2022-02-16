import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: Array<any> | undefined): string | undefined {
    return value?.map(item => item.name || item).join(', ');
  }

}
