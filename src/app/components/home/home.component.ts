import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: Array<any> = [];
  loading: boolean;
  error = false;
  mensajeError: string;

  constructor(private spotifiy: SpotifyService) { }

  ngOnInit() {

    this.loading = true;

    this.spotifiy.getNewRealeses()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio ) => {
        this.mensajeError =  errorServicio.error.error.message;
        this.error = true;
        this.loading = false;
      });
  }

}
