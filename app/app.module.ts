import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AlbumComponent }   from './album.component';
import { AlbumListComponent }   from './album-list.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CartAlbumComponent } from './cart.component';
import { CartPipe } from './cart.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
     AppComponent,
     AlbumComponent,
     AlbumListComponent,
     GenrePipe,
     ArtistPipe,
     CartAlbumComponent,
     CartPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
