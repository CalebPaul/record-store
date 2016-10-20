import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name:"cartstatus",
  pure: false
})
export class CartPipe implements PipeTransform {
  transform(input: Album[], desiredAlbums) {
    var output: Album[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].carted === true){
        console.log(input[i]);
        output.push(input[i]);
      }
    }
    return output;
  }
}
