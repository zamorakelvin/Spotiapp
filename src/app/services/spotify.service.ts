import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService {

  constructor( private http: Http ) {
    console.log('spotify listo');
   }
   getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new Headers({
      'Authorization': 'Bearer BQAfvVY70C9uNNnv8-FemCuGRLnyRLvJMHoQW3GaNCYafeYpBZt5FOxEYGY6wFCnxe4phqQG_3QI39Rz9_w'
     });

     return this.http.get( url, { headers });
  }
   getNewReleases() {

      return this.getQuery('browse/new-releases?limit=10')
                .pipe( map( data => {
                  data = JSON.parse( data['_body'] );
                console.log( data );
                return data['albums'].items;
                   }));
   }
   getasrtistas(termino: string) {

      return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
                 .pipe( map( data => {
                  data = JSON.parse( data['_body'] );
                  console.log( data );
                  return data['artists'].items;
                   }));
    }
    getartista( id: string) {

      return this.getQuery(`artists/${ id }`)
                 .pipe( map( data => {
                  data = JSON.parse( data['_body'] );
                  // console.log( data );
                  return data;
                   }));
    }
}
