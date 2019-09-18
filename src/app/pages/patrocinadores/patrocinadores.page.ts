import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../services/evento.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.page.html',
  styleUrls: ['./patrocinadores.page.scss'],
})
export class PatrocinadoresPage implements OnInit {

  dataPatrocinadores: any[] = [];
  
  constructor(private route: ActivatedRoute,
    public menu: MenuController, 
    public eventoService: EventoService) { }

  getPatrocinadores(){
    this.eventoService.getPatrocinadorServi(2).subscribe(
      data =>{
        this.dataPatrocinadores = data['patrocinadores']
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
    this.getPatrocinadores()
  }

}
