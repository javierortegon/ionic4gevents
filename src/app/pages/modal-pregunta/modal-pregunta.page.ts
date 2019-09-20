import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-modal-pregunta',
  templateUrl: './modal-pregunta.page.html',
  styleUrls: ['./modal-pregunta.page.scss'],
})
export class ModalPreguntaPage implements OnInit {

  pregunta: any
  idconfe: any
  dataConferencias: any[] = [];

  constructor(private modalController: ModalController, public eventoService: EventoService) { }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  getPatrocinadores(){
    this.eventoService.getPreguntasServi(2).subscribe(
      data =>{
        this.dataConferencias = data['conferencias']
        console.log(this.dataConferencias)
      }
      ,error =>{
        console.log("Error: " + error);
      }
    )
  }

  registroPregunta(){
    this.eventoService.postPreguntasConferencia( this.idconfe, 1, this.pregunta ).subscribe(
      data =>{
        //this.dataConferencias = data['conferencias']
        console.log(data)
      }
      ,error =>{
        console.log("Error: " + error);
      }
    )
  }

  register(){
    console.log('entro')
    this.closeModal()
  }

  ngOnInit() {
    this.getPatrocinadores()
  }

}
