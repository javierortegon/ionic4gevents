import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deta-pregunta',
  templateUrl: './deta-pregunta.page.html',
  styleUrls: ['./deta-pregunta.page.scss'],
})
export class DetaPreguntaPage implements OnInit {

  pregunta:string
  respuesta:string

  constructor(public eventoService: EventoService, private route: ActivatedRoute) { }

  getPregunta(pregunta){
    this.eventoService.getDetallesPregunta(pregunta).subscribe(
      data =>{
        this.pregunta = data.pregunta['pregunta']
        this.respuesta = data.pregunta['respuesta']
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      }
    )
  }

  ngOnInit() {
    this.getPregunta(this.route.snapshot.params['pregunta'])

  }

}
