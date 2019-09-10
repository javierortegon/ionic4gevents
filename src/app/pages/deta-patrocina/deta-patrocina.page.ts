import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deta-patrocina',
  templateUrl: './deta-patrocina.page.html',
  styleUrls: ['./deta-patrocina.page.scss'],
})
export class DetaPatrocinaPage implements OnInit {

  perfil:string
  compania:string
  celular:string
  website:string
  stand:string
  imagen:string

  constructor(public eventoService: EventoService,private route: ActivatedRoute) { }

  getPatrocinadores(patrocinador){
    this.eventoService.getDetallesPatrocina(patrocinador).subscribe(
      data =>{
        this.perfil = data.patrocinadores['perfil']
        this.compania = data.patrocinadores['compania']
        this.celular = data.patrocinadores['celular']
        this.website = data.patrocinadores['website']
        this.stand = data.patrocinadores['stand']
        this.imagen = this.eventoService.globalUrlImages + data.patrocinadores['imagen']
        console.log(data)
      }
      ,error =>{
        console.log("noo");
      }
    )
  }

  ngOnInit() {
    this.getPatrocinadores(this.route.snapshot.params['patroci'])
  }

}
