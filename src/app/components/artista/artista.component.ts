import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  loadingartist: boolean;
  artista: any;
  teste: any = {};
  urlartista: string;
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
                this.loadingartist = true;
                this.router.params.subscribe( params => {
                // console.log( params['id']);
                this.getartista( params['id']);
              });

  }

  getartista( id: string ) {
    this.loadingartist = true;
    this.teste = this.spotify.getartista( id );
    debugger;
    console.log( this.teste );
  //   return this.spotify.getartista( id )
  //                     .subscribe( artista => {
  //                       console.log(artista);
  //                       this.artista = artista;
  //                       this.urlartista = this.artista.external_urls.spotify;
  //                       // debugger;
  //                       // console.log(this.urlartista);
  //                       this.loadingartist = false;
  //                     });
  }
}
