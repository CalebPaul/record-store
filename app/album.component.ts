import { Component, Input } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  template:`
    <div>
      <ul class="text-center">
        <li>
        <input *ngIf="album.carted === true" type="checkbox" (click)="toggleCart(false)"/>
        <input *ngIf="album.carted === false" type="checkbox" checked (click)="toggleCart(true)"/>
        <strong>{{ album.artist }}</strong>, {{ album.name }}
        </li>
        <li class="text-center">{{ album.genre }}</li>
        <li class="text-center">{{ album.price }}.00</li>
      </ul>

    </div>
  `
})

export class AlbumComponent {
  @Input() album: Album;
  toggleDone(setCarted: boolean) {
    this.album.carted = setCarted;
  }
}
