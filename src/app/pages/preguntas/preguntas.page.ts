import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  dataPreguntas: any[] = [];
  dataConferencias: any[] = [];


  constructor(public menu: MenuController, public eventoService: EventoService) { }

  getPatrocinadores(){
    this.eventoService.getPreguntasServi(2).subscribe(
      data =>{
        this.dataPreguntas = data['preguntas']
        console.log(this.dataPreguntas)
        this.dataConferencias = data['conferencias']
      }
      ,error =>{
        console.log("Error: " + error);
      }
    )
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.getPatrocinadores()
  }

}
