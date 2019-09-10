import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-deta-agenda',
  templateUrl: './deta-agenda.page.html',
  styleUrls: ['./deta-agenda.page.scss'],
})
export class DetaAgendaPage implements OnInit {

  constructor(private route: ActivatedRoute, public eventoService: EventoService) { }
  
  titulo:string
  dia:string
  horaInicio:string
  horaCierre:string
  ubicacion:string
  capacidad:string
  descripcion:string

  dataConferencistas: any[] = [];

  getAsistente(asistente){
    this.eventoService.getDetallesAgenda(asistente).subscribe(
      data =>{
        this.titulo = data.agenda['titulo']
        this.dia = data.agenda['dia_agenda']
        this.horaInicio = data.agenda['hora_inicio']
        this.horaCierre = data.agenda['hora_cierre']
        this.ubicacion = data.agenda['salon']
        this.capacidad = data.agenda['capacidad']
        this.descripcion = data.agenda['description']
        this.dataConferencistas = data['conferencistas']
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      })
  }

  ngOnInit() {
    this.getAsistente(this.route.snapshot.params['agenda'])
    console.log(this.route.snapshot.params['agenda'])
  }

}
