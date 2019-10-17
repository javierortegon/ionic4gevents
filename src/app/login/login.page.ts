import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


import { UsuarioService } from './../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [
    './styles/login.page.scss'
  ]
})
export class LoginPage implements OnInit {
  FB_APP_ID: number = 2328564010739918;

  loginForm: FormGroup;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    public router: Router,
    private fb: Facebook,
		private nativeStorage: NativeStorage,
		public loadingController: LoadingController,
		private platform: Platform,
		public alertController: AlertController,
    public menu: MenuController,
    public usuarioService: UsuarioService
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('test@test.com', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  async doFbLogin(){
		const loading = await this.loadingController.create({
			message: 'Please wait...'
		});
		this.presentLoading(loading);

		//the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email"];

		this.fb.login(permissions)
		.then(response =>{
			let userId = response.authResponse.userID;

			//Getting name and gender properties
			this.fb.api("/me?fields=name,email", permissions)
			.then(user =>{
				user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
				//now we have the users info, let's save it in the NativeStorage
				this.nativeStorage.setItem('facebook_user',
				{
					name: user.name,
					email: user.email,
					picture: user.picture
				})
				.then(() =>{
					this.router.navigate(["/user"]);
					loading.dismiss();
				}, error =>{
					console.log(error);
					loading.dismiss();
				})
			})
		}, error =>{
			console.log(error);
			loading.dismiss();
		});
	}

	async presentLoading(loading) {
		return await loading.present();
	}

  ngOnInit(): void {
    this.menu.enable(false);
  }

  doLogin(): void {
    this.usuarioService.loginPost(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
       
      data =>{
        if (data !== null && data !== undefined) {
          this.nativeStorage.setItem('token', data.access_token)
          this.nativeStorage.getItem('token').then(
            data => console.log(data),
            error => console.error(error)
          )
          this.router.navigate(['homeNew']);
          /* this.router.navigateByUrl('/events-lista');
          this.api.setToken(data.access_token);
          this.api.setId( data.user.id);
          this.api.datosPersonales(data.user.email, data.user.celular); */
        }else{
         console.log('datos malos')
        }
        
      }, error => {
        let error_text = ''
        switch (error.status) {
          case 401:
            error_text = "Usuario o contraseña incorrecta"
            break

          case 500:
            error_text = "Hubo un problema de nuestro lado Inténtelo mas tarde"
            break

          default:
            error_text = "Hubo un problema inténtelo mas tarde"
            break
        }
      }
    ) 
    console.log(this.loginForm.get('email').value);
    console.log(this.loginForm.get('password').value);
  }

  goToForgotPassword(): void {
    console.log('redirect to forgot-password page');
  }

  doFacebookLogin(): void {
    console.log('facebook login');
    this.router.navigate(['homeNew']);
  }

  doGoogleLogin(): void {
    console.log('google login');
    this.router.navigate(['homeNew']);
  }

  doTwitterLogin(): void {
    console.log('twitter login');
    this.router.navigate(['homeNew']);
  }
}
