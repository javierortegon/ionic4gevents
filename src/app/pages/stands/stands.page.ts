import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.page.html',
  styleUrls: ['./stands.page.scss'],
})
export class StandsPage implements OnInit {
  dataExpositores: any[] = [];

  constructor(public api: EventoService, public menu: MenuController) {
  }

  getStands(){
    this.api.getStandEventServi(2).subscribe(
      data =>{
        this.dataExpositores = data['stands']
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      })
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.getStands()
  }

}
