import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'cart',
  template: `
  <div>
    <div *ngFor="let currentAlbum of childAlbumList | cartstatus:selectedCarted">
    <album-display [album]="currentAlbum"></album-display>
    </div>
  </div>
  `
})

export class CartAlbumComponent {
  @Input() childAlbumList: Album[];
  public selectedCarted: boolean = false;

}
