import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'howMuch'
})
export class HowMuchPipe implements PipeTransform {

  transform(value: Number): String {
    if(value === 1){
      return 'Básico';
    }
    else if(value === 2){
      return 'Intermediário';
    }
      return 'Avançado';
  }

}
