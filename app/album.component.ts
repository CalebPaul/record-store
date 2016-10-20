import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  template:`
    <div>
      <ul>
        <li>
        <input *ngIf="album.carted === true" type="checkbox" checked (click)="toggleCart(false)"/>
        <input *ngIf="album.carted === false" type="checkbox" (click)="toggleCart(true)"/>
        <strong>{{ album.artist }}</strong>, <em>{{ album.name }}</em>
        </li>
        <li>{{ album.genre }}</li>
        <li>{{ "$" + album.price }}.00</li>
      </ul>

    </div>
  `
})

export class AlbumComponent {
  @Input() album: Album;
  toggleCart(setCarted: boolean) {
    this.album.carted = setCarted;
  }
}
