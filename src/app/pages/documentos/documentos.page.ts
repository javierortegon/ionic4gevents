import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  dataDocumentos: any[] = [];

  constructor( public api: EventoService ) { }

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

  ngOnInit() {
    this.getDocumentos();
  }

}
