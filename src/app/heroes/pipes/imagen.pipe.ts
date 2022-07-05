import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  base_path:string = './assets/heroes'; 

  transform(heroe: Heroe): string {
    if( 'id' in heroe  && heroe.id) {
      return `${this.base_path}/${heroe.id}.jpg`
    } 
    return `./assets/no-image.png`;
  }

}
