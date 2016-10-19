import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Record Store</h1>
  </div>
  <album-list>


  </album-list>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("The Jimi Hendrix Experience", "Jimi Hendrix", "Rock", 12),
    new Album("Electric LadyLand", "Jimi Hendrix", "Rock", 10),
    new Album("Songs by Sam Cooke", "Sam Cooke", "Soul", 10),
    new Album("Encore", "Sam Cooke", "Soul", 8),
    new Album("Sweet Baby James", "James Taylor", "Folk", 12),
    new Album("Walking Man", "James Taylor", "Folk", 10)
  ];
}
