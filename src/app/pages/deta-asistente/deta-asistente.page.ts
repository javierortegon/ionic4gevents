import { EventoService } from './../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-deta-asistente',
  templateUrl: './deta-asistente.page.html',
  styleUrls: ['./deta-asistente.page.scss'],
})
export class DetaAsistentePage implements OnInit {

  constructor(public eventoService: EventoService,private route: ActivatedRoute,) { }

  getAsistente(asistente){
    this.eventoService.getDetallesAsistente(asistente).subscribe(
      data =>{
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      })
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['asistente'])
  }



}
