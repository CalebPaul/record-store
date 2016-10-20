import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'cart',
  template: `
  <div>
  <h1>In Cart</h1>
    <div *ngFor="let currentAlbum of childAlbumList | cart:selectedCarted">
      <p>{{currentAlbum.name}}</p>
    </div>
  </div>
  `
})

export class CartAlbumComponent {
  @Input() childAlbumList: Album[];
  public selectedCarted: boolean = true;

}
