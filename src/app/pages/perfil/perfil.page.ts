import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from './../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  profileForm: FormGroup;

  constructor(public usuarioService:UsuarioService) { 
    this.profileForm = new FormGroup({
      'mensajes': new FormControl(),
      'citas': new FormControl()
    });
  }

  saveProfile():void{
    console.log(this.profileForm.get('mensajes').value);
    console.log(this.profileForm.get('citas').value);
  }

  getDataProfile(){
    this.usuarioService.getDataProfile(12,2).subscribe(
      data =>{
        if(data['dataAsistente']['mensajes'] != 1){
          this.profileForm.controls['mensajes'].setValue(false)
        }else{
          this.profileForm.controls['mensajes'].setValue(true)
        }

        if(data['dataAsistente']['citas'] != 1){
          this.profileForm.controls['citas'].setValue(false)
        }else{
          this.profileForm.controls['citas'].setValue(true)
        }

        console.log(data['dataAsistente']['id']);
      }
      ,error =>{
        console.log("Error: " + error);
      }
    )
  }

  ngOnInit() {
    this.getDataProfile()
  }

}
