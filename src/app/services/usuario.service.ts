import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

const urlApi = "https://testing.gevents.co/middleware/public/api/";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,private nativeStorage: NativeStorage) { }

   // Metodo para realizar el login
   loginPost(emailPost: any, passwordPost:any ):Observable<any>{
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json' 
    });

    const path =  urlApi + "login_user_cors";

    return this.http.post(path,{
      email: emailPost,
      password: passwordPost,
      tipo: 5,
      remember_me: true
      },{ headers: httpHeaders }) 
  }

}
