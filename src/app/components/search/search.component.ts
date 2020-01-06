import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'app/services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  // dato: any;
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {

   }

  ngOnInit() {
  }

  buscar(termino: string) {
    // console.log(termino);
    this.loading = true;
    this.spotify.getasrtistas(termino)
        .subscribe( (data: any) => {
          // this.dato = JSON.parse(data._body);
          // console.log( this.dato );
          this.artistas = data; // this.dato.artists.items;
          this.loading = false;
        });
  }
}
