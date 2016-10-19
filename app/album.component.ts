import { Component, Input } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  template:`
    <div>
      <ul>
        <li><h3>{{ album.name }}</h3></li>
        <li>{{ album.artist }}</li>
        <li>{{ album.genre }}</li>
        <li>{{ album.price }}</li>
      </ul>
      <input *ngIf="album.carted === true" type="checkbox" (click)="toggleCart(false)"/>
      <input *ngIf="album.carted === false" type="checkbox" checked (click)="toggleCart(true)"/>
    </div>
  `
})

export class AlbumComponent {
  @Input() album: Album;
  toggleDone(setCarted: boolean) {
    this.album.carted = setCarted;
  }
}
