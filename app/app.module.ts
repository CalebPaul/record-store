import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AlbumComponent }   from './album.component';
import { AlbumListComponent }   from './album-list.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CartPipe } from './cartstatus.pipe';
import { CartAlbumComponent } from './cart.component';

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
     CartPipe,
     CartAlbumComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
