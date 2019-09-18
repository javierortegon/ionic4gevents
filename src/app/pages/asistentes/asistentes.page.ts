import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asistentes',
  templateUrl: './asistentes.page.html',
  styleUrls: ['./asistentes.page.scss'],
})
export class AsistentesPage implements OnInit {

  asistentes: any
  dataAssis: any[] = [];

  constructor(
    public api: EventoService,
    public menu: MenuController
  ) { }

  getAsistentes(){
    this.api.getAsistEventServi(2).subscribe(
      data =>{
        console.log(data)
        this.asistentes = data.asistentes
        this.dataAssis = data['datos']
      }
      ,error =>{
        console.log("noo");
      })
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.getAsistentes()
  }

}
