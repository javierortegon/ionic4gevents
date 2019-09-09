import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "http://localhost/middleware/public/api/";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  public globalUrlImages: string = "http://localhost/middleware/public/images/events/"

  constructor(private http: HttpClient) { }

  getEventServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_menu_event_con_apk1/' + idEvento ,{ headers: httpHeaders }) 
  }

  getAsistEventServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_assistentes_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getDetallesAsistente(idAsistente:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_asistente_detalle/' + idAsistente ,{ headers: httpHeaders }) 
  }

  getStandEventServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_expositores_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getDetallesStand(idStand:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_stand_detalle/' + idStand ,{ headers: httpHeaders }) 
  }

  getConferencistasServi(idEvento:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_expositores_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getDetallestConferencistas(idConferencis:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_expositores_detalle/' + idConferencis ,{ headers: httpHeaders }) 
  }

  getAgendaServi(idEvento:any){
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_agendas_apk/' + idEvento ,{ headers: httpHeaders }) 
  }
  
}
