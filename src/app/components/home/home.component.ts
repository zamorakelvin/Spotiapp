import { Component } from '@angular/core';
import { SpotifyService } from 'app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  canciones: any[] = [];
  loading: boolean;
  // dato: any;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases()
        .subscribe( ( data: any ) => {
        // console.log( data );
        // console.log( JSON.parse(data._body) );
        // console.log( JSON.stringify(data) );
        // this.dato = JSON.parse(data._body);
        this.canciones = data; // this.dato.albums.items;
        this.loading = false;
    });
  }
}
