import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deta-conferencis',
  templateUrl: './deta-conferencis.page.html',
  styleUrls: ['./deta-conferencis.page.scss'],
})
export class DetaConferencisPage implements OnInit {
  
  nombre:string
  compania:string
  email:string
  cargo:string
  celular:string
  perfil:string
  foto:string

  constructor(public eventoService: EventoService,private route: ActivatedRoute) { }

  getConferencista(conferencista){
    this.eventoService.getDetallestConferencistas(conferencista).subscribe(
      data =>{
        this.nombre = data.conferencista['nombre']
        this.compania = data.conferencista['compania']
        this.email = data.conferencista['correo']
        this.cargo = data.conferencista['cargo']
        this.celular = data.conferencista['movil']
        this.perfil = data.conferencista['perfil']
        this.foto =  this.eventoService.globalUrlImages + data.conferencista['foto_perfil']
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      }
    )
  }

  ngOnInit() {
    this.getConferencista(this.route.snapshot.params['conferen'])
    console.log(this.route.snapshot.params['conferen'])
  }

}
