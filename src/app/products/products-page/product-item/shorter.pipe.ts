
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorter'
})
export class ShorterPipe implements PipeTransform {

  transform(value: string, max: number): string {
    if(value.length > max) return value.substr(0, max -3) + "...";
    return value;
  }

}
