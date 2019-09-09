import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../services/evento.service';

@Component({
  selector: 'app-conferencistas',
  templateUrl: './conferencistas.page.html',
  styleUrls: ['./conferencistas.page.scss'],
})
export class ConferencistasPage implements OnInit {

  dataConferencistas: any[] = [];


  constructor(private route: ActivatedRoute, public eventoService: EventoService) { }

  getConferencistas(){
    this.eventoService.getConferencistasServi(2).subscribe(
      data =>{
        this.dataConferencistas = data['conferencistas']
      }
      ,error =>{
        console.log("Error: " + error);
      }
    )
  }

  ngOnInit() {
    this.getConferencistas()
    console.log(this.route.snapshot.params['event'])
  }

}
