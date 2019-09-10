import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.page.html',
  styleUrls: ['./patrocinadores.page.scss'],
})
export class PatrocinadoresPage implements OnInit {

  dataPatrocinadores: any[] = [];
  
  constructor(private route: ActivatedRoute, public eventoService: EventoService) { }

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

  ngOnInit() {
    this.getPatrocinadores()
  }

}
