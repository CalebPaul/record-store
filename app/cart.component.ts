import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'cart',
  template: `
  <div>
    <div *ngFor="let currentAlbum of childAlbumList | cart:selectedCarted">
    </div>
  </div>
  `
})

export class CartAlbumComponent {
  @Input() childAlbumList: Album[];
  public selectedCarted: boolean = false;
}
