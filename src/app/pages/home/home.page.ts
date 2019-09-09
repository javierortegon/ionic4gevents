import { EventoService } from './../../services/evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
        this.icono = this.eventoService.globalUrlImages + data.icono['imagen']
        this.asistentes = data.asistentes
        console.log(data)
      }, error =>{
        console.log("error");
      }
    )
  }

  goToAttendantPage(){

  }

  ngOnInit() {
    this.getDataEvent()
  }

}
