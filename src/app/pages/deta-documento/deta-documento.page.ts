import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deta-documento',
  templateUrl: './deta-documento.page.html',
  styleUrls: ['./deta-documento.page.scss'],
})
export class DetaDocumentoPage implements OnInit {

  nombre:string
  resumen:string
  ruta:string

  constructor(public eventoService: EventoService,private route: ActivatedRoute) { }

  getDocumentoDetalle(documento){
    this.eventoService.getDetallesDocumento(documento).subscribe(
      data =>{
        this.nombre = data.documento['nombre']
        this.resumen = data.documento['resumen']
        this.ruta =  this.eventoService.globalUrlDocuments + data.documento['documento']
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      }
    )
  }

  download(ruta){
    console.log(ruta)
    window.open(ruta, '_system', 'location=no')
  }

  ngOnInit() {
    this.getDocumentoDetalle(this.route.snapshot.params['documen'])
  }

}
