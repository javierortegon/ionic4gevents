import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../services/evento.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  dataAgenda: any[] = [];

  constructor(private route: ActivatedRoute, 
    public eventoService: EventoService,
    public menu: MenuController
    ) { }

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

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.getAgenda()
  }

}
