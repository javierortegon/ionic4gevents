import { EventoService } from './../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-deta-asistente',
  templateUrl: './deta-asistente.page.html',
  styleUrls: [
    './deta-asistente.page.scss'
  ]
})
export class DetaAsistentePage implements OnInit {

  imgProfile:string
  nombre:string
  email:string
  celular:string
  compania:string

  constructor(public eventoService: EventoService,private route: ActivatedRoute,) { }

  getAsistente(asistente){
    this.eventoService.getDetallesAsistente(asistente).subscribe(
      data =>{
        this.imgProfile = this.eventoService.globalUrlImages + data.usuario['avatar']
        this.nombre = data.usuario['nombre'] + " " + data.usuario['apellido']
        this.email = data.usuario['email']
        this.celular = data.usuario['celular']
        this.compania = data.usuario['compania']
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      })
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['asistente'])
    this.getAsistente(this.route.snapshot.params['asistente'])
  }



}
