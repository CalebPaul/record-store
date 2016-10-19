import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Album[], desiredGenre){
    var output: Album[] = [];
    if (desiredGenre === "Rock") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Rock") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Soul") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Soul") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "Folk") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre === "Folk") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
