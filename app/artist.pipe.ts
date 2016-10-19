import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "artist",
  pure: false
})
export class ArtistPipe implements PipeTransform {
  transform(input: Album[], desiredArtist){
    var output: Album[] = [];
    if (desiredArtist === "Jimi Hendrix") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Jimi Hendrix") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "Sam Cooke") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Sam Cooke") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "James Taylor") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "James Taylor") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
