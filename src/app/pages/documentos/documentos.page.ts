import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  dataDocumentos: any[] = [];

  constructor( public api: EventoService, public menu: MenuController ) { }

  getDocumentos(){
    this.api.getDocumentosServi(2).subscribe(
      data =>{
        console.log(data)
        this.dataDocumentos = data['documentos']
      }
      ,error =>{
        console.log("noo");
      })
  }
  
  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.getDocumentos();
  }

}
