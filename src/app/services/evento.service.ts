import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "https://testing.gevents.co/middleware/public/api/";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  public globalUrlImages: string = "https://testing.gevents.co/middleware/public/images/events/"
  public globalUrlDocuments: string = "https://testing.gevents.co/middleware/public/Documentos/"

  constructor(private http: HttpClient) { }

  login(idEvento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_menu_event_con_apk1/' + idEvento ,{ headers: httpHeaders }) 
  }


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
    return this.http.get( apiUrl + 'get_stands/' + idEvento ,{ headers: httpHeaders }) 
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

  getAgendaServi(idEvento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_agendas_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getDetallesAgenda(agenda:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_agenda_detalle/' + agenda ,{ headers: httpHeaders }) 
  }

  getPatrocinadorServi(idEvento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_patrocinadores_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getDetallesPatrocina(patrocinador:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_patrocinadores_detalle/' + patrocinador ,{ headers: httpHeaders }) 
  }
  
  getDocumentosServi(idEvento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_documentos_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getDetallesDocumento(documento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_documentos_detalle/' + documento ,{ headers: httpHeaders }) 
  } 

  getAnunciosServi(idEvento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_anuncios_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getPreguntasServi(idEvento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_preguntas_apk/' + idEvento ,{ headers: httpHeaders }) 
  }

  getDetallesPregunta(documento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_pregunta_detalle/' + documento ,{ headers: httpHeaders }) 
  }
  
  getPreguntasConferencia(conferencia:any, evento:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });
    return this.http.get( apiUrl + 'get_preguntas_filtro/'+ evento +'/'+ conferencia  ,{ headers: httpHeaders }) 
  }

  postPreguntasConferencia(conferencia:any, usuario:any, pregunta:any):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+ 'dssdasd'
    });

    let postData = {
      "conferencia": conferencia,
      "usuario": 1,
      "pregunta": pregunta
    }

    return this.http.post( apiUrl + 'save_pregunta_conferencia', postData ,{ headers: httpHeaders }) 
  }

}
