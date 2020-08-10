import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService, IUser } from "../auth-service.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public username: string;
	public password: string;
	public notAuthenticated: boolean = true;


	constructor(private authService: AuthServiceService, private router: Router) { }

	ngOnInit(): void {
	}

	login() {
		let result ;
		if (this.username === 'user') {
			result = {
				"id": 1,
				"nom": "Utilisateur",
				"prenom": "user",
				"login": "user",
				"password": "user",
				"passwordinbyte": null,
				"profils": [
					{
						"id": 2,
						"name": "Utilisateur",
						"privileges": [
							{
								"id": 3,
								"name": "Projet"
							},
							{
								"id": 4,
								"name": "Env"
							}
						]
					}
				],
				"datecreation": null,
				"mail": "user@test.com",
				"tel": "06613444444",
				"token": "usertoken"
			}
		} else {
			result = {
				"id": 1,
				"nom": "administrateur",
				"prenom": "admin",
				"login": "admin",
				"password": "admin",
				"passwordinbyte": null,
				"profils": [
					{
						"id": 1,
						"name": "Administrateur",
						"privileges": [
							{
								"id": 1,
								"name": "Utilisateur"
							},
							{
								"id": 2,
								"name": "Profil"
							},
							{
								"id": 3,
								"name": "Projet"
							},
							{
								"id": 4,
								"name": "Env"
							}
						]
					}
				],
				"datecreation": null,
				"mail": "admin@test.com",
				"tel": "06613444444",
				"token": "admintoken"
			}
		}
		
		this.authService.user = result;
		localStorage.setItem('auth-token', this.authService.user.token);
		localStorage.setItem('current-user', JSON.stringify(this.authService.user));
		this.router.navigate(['/home']);
		// this.authService.login(this.username, this.password).subscribe(
		// 	(result: IUser) => {
		// 		if (this.username === 'user') {
		// 			result = {
		// 				"id": 1,
		// 				"nom": "administrateur",
		// 				"prenom": "admin",
		// 				"login": "admin",
		// 				"password": "admin",
		// 				"passwordinbyte": null,
		// 				"profils": [
		// 					{
		// 						"id": 2,
		// 						"name": "Utilisateur",
		// 						"privileges": [
		// 							{
		// 								"id": 3,
		// 								"name": "Projet"
		// 							},
		// 							{
		// 								"id": 4,
		// 								"name": "Env"
		// 							}
		// 						]
		// 					}
		// 				],
		// 				"datecreation": null,
		// 				"mail": "user@test.com",
		// 				"tel": "06613444444",
		// 				"token": "usertoken"
		// 			}
		// 		} else {
		// 			result = {
		// 				"id": 1,
		// 				"nom": "administrateur",
		// 				"prenom": "admin",
		// 				"login": "admin",
		// 				"password": "admin",
		// 				"passwordinbyte": null,
		// 				"profils": [
		// 					{
		// 						"id": 1,
		// 						"name": "Administrateur",
		// 						"privileges": [
		// 							{
		// 								"id": 1,
		// 								"name": "Utilisateur"
		// 							},
		// 							{
		// 								"id": 2,
		// 								"name": "Profil"
		// 							},
		// 							{
		// 								"id": 3,
		// 								"name": "Projet"
		// 							},
		// 							{
		// 								"id": 4,
		// 								"name": "Env"
		// 							}
		// 						]
		// 					}
		// 				],
		// 				"datecreation": null,
		// 				"mail": "admin@test.com",
		// 				"tel": "06613444444",
		// 				"token": "admintoken"
		// 			}
		// 		}
				
		// 		this.authService.user = result;
		// 		localStorage.setItem('auth-token', this.authService.user.token);
		// 		localStorage.setItem('current-user', JSON.stringify(this.authService.user));
		// 		this.router.navigate(['/home']);
		// 	},
		// 	error => {
		// 		alert('Oups something went wrong');
		// 	});
	}

}
