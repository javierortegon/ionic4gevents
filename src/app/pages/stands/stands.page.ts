import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.page.html',
  styleUrls: ['./stands.page.scss'],
})
export class StandsPage implements OnInit {
  dataExpositores: any[] = [];

  constructor(public api: EventoService) {
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

  ngOnInit() {
    this.getStands()
  }

}
