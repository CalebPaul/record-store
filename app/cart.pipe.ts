import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name:"cart",
  pure: false
})
export class CartPipe implements PipeTransform {
  transform(input: Album[], desiredAlbums) {
    var output: Album[] = [];
    if (desiredAlbums.carted === true) {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
        console.log(input[i]);
      }
    return output;}
  }
}
