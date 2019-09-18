import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-sobr-evento',
  templateUrl: './sobr-evento.page.html',
  styleUrls: ['./sobr-evento.page.scss'],
})
export class SobrEventoPage implements OnInit {

  
  event: any[] = [];
  banner: string;
  icono: string;
  asistentes : any;
  //variable temporal
  evento: any = 2

  constructor(public eventoService: EventoService, private iab: InAppBrowser) { }

  getDataEvent(){
    this.eventoService.getEventServi(2).subscribe(
      data =>{
        console.log(data)
        this.event = data.evento[0]
        this.banner = this.eventoService.globalUrlImages + data.banner['imagen']
        this.asistentes = data.asistentes
      }, error =>{
        console.log("error");
      }
    )
  }

  openBlank() {
    this.iab.create(`https://jamibot.com`, `_blank`);
  }

  openF(){
    this.iab.create(`https://Facebook.com`, `_blank`);
  }

  openT(){
    this.iab.create(`http://twitter.com`, `_blank`);
  }

  openI(){
    this.iab.create(`http://instagram.com`, `_blank`);
  }

  openSystem() {
    this.iab.create(`https://jamibot.com`, `_system`);
  }

  ngOnInit() {
    this.getDataEvent()
  }

}
