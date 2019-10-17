import { EventoService } from './../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: [
    './home.page.scss'
  ]
})
export class HomePage implements OnInit {

  mySlideOptions = {
    initialSlide: 0,
    autoplay:true
    };

  anuncio: any[] = [];
  event: any[] = [];
  banner: string;
  icono: string;
  asistentes : any;
  //variable temporal
  evento: any = 2

  constructor(public eventoService: EventoService,
    private iab: InAppBrowser, 
    public menu: MenuController) { }

  getDataEvent(){
    this.eventoService.getEventServi(2).subscribe(
      data =>{
        this.event = data.evento[0]
        this.banner = this.eventoService.globalUrlImages + data.banner['imagen']
        this.asistentes = data.asistentes
      }, error =>{
        console.log("error");
      }
    )
  }

  getAnuncios(){
    this.eventoService.getAnunciosServi(2).subscribe(
      data =>{
        this.anuncio = data.anuncios
      }, error =>{
        console.log("error");
      }
    )
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  openEncuesta(){
    this.iab.create(`https://es.surveymonkey.com/r/6VVFVN8`, `_blank`);
  }

  ngOnInit() {
    this.getDataEvent()
    this.getAnuncios()
  }

}
