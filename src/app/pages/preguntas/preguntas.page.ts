import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EventoService } from './../../services/evento.service';

import { ModalController } from '@ionic/angular';
import { ModalPreguntaPage } from './../modal-pregunta/modal-pregunta.page';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  dataPreguntas: any[] = [];
  dataConferencias: any[] = [];
  dataReturned:any;
  conferencia: any

  constructor(public menu: MenuController, public eventoService: EventoService, public modalController: ModalController) { }

  getPreguntas(){
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

  getPreguntasConferencia(conferencia, evento){
    this.eventoService.getPreguntasConferencia(conferencia,2).subscribe(
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

  selectConference(){
    console.log('cambio')
    console.log(this.conferencia);
    this.getPreguntasConferencia(this.conferencia, 2)
    
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPreguntaPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.getPreguntas()
  }

}
