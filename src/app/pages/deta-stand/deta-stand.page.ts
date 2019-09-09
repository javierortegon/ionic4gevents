import { Component, OnInit } from '@angular/core';
import { EventoService } from './../../services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deta-stand',
  templateUrl: './deta-stand.page.html',
  styleUrls: ['./deta-stand.page.scss'],
})
export class DetaStandPage implements OnInit {

  compania:string
  numeStand:string
  perfilEmpresa:string
  movil:string
  website:string
  imagen:string

  constructor(public api: EventoService, private route: ActivatedRoute) { }

  getStand(){
    this.api.getDetallesStand(this.route.snapshot.params['stand']).subscribe(
      data=>{
        this.imagen = this.api.globalUrlImages + data.stands['imagen']
        this.compania = data.stands['compania']
        this.numeStand = data.stands['numero_stand']
        this.perfilEmpresa = data.stands['perfil_empresa']
        this.movil = data.stands['movil']
        this.website = data.stands['website']
        console.log(data)
      }, error =>{
        console.log("Error: " + error);
      }
    )
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['stand'])
    this.getStand()
  }

}
