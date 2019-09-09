import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  dataAgenda: any[] = [];

  constructor(private route: ActivatedRoute, public eventoService: EventoService) { }

  getAgenda(){
    this.eventoService.getAgendaServi(2).subscribe(
      data =>{
        this.dataAgenda = data['agenda']
      }
      ,error =>{
        console.log("Error: " + error);
      }
    )
  }

  ngOnInit() {
    this.getAgenda()
  }

}
