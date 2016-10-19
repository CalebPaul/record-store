import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
    <select (change)="onChangeGenre($event.target.value)" class="filter form-control">
      <option value="all" selected>Show All Genre</option>
      <option value="Rock" >Show Rock</option>
      <option value="Soul" >Show Soul</option>
      <option value="Folk" >Show Folk</option>
    </select>
    <select (change)="onChangeArtist($event.target.value)" class="filter form-control">
      <option value="all" selected>Show All Artists</option>
      <option value="Jimi Hendrix" >Show Jimi Hendrix Albums</option>
      <option value="Sam Cooke" >Show Sam Cooke Albums</option>
      <option value="James Taylor" >Show James Taylor Albums</option>
    </select>
  <div *ngFor="let currentAlbum of childAlbumList | genre:selectedGenre | artist:selectedArtist">
    <album-display [album]="currentAlbum"></album-display>
  </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Output() clickSender = new EventEmitter();
  public selectedGenre: string = "all";
  public selectedArtist: string = "all";
  onChangeGenre(optionGenre) {
    this.selectedGenre = optionGenre;
  }
  onChangeArtist(optionArtist) {
    this.selectedArtist = optionArtist;
  }
}
