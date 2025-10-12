import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(descricao: string): string {
    if (descricao.length > 30) {
      return descricao.substring(0, 30) + '...';
    } else {
      return descricao;
    }
  }

}
