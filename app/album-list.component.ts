import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
  <select (change)="onChangeGenre($event.target.value)" class="filter">
    <option value="all" selected>Show All</option>
    <option value="rock" >Show Rock</option>
    <option value="soul" >Show Soul</option>
    <option value="folk" >Show Folk</option>
  </select>
  <select (change)="onChangeArtist($event.target.value)" class="filter">
    <option value="all" selected>Show All</option>
    <option value="Jimi Hendrix" >Show Jimi Hendrix Albums</option>
    <option value="Sam Cooke" >Show Sam Cooke Albums</option>
    <option value="James Taylor" >Show James Taylor Albums</option>
  </select>
  <div *ngFor="let currentAlbum of childAlbum">
    <album-display [album]="currentAlbum"></album-display>
  </div>
  `
})

export class AlbumListComponent{
  @Input() childAlbumList: Album[];
  @Output() clickSender = new EventEmitter();
}
