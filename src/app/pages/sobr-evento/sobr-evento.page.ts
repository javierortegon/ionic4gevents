import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';

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

  constructor(public eventoService: EventoService) { }

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

  ngOnInit() {
    this.getDataEvent()
  }

}
