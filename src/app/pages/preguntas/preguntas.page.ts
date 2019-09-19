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

  constructor(public menu: MenuController, public eventoService: EventoService, public modalController: ModalController) { }

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
    this.getPatrocinadores()
  }

}
