import { Component } from '@angular/core';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  utilisateur: any = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    matricule: '',
    adresse: '',
    gsm: '',
    serviceId: '',
  };

  constructor(private router: Router, private utilisateursService: UtilisateursService) {}

  createUser(){
    
    this.utilisateur.updatedAt = '';
    this.utilisateur.createdAt = new Date();
    this.utilisateur.id = new Date().getTime();

    this.utilisateursService.create(this.utilisateur).subscribe((response) => this.utilisateur = response);
    alert('Added successfully')
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/utilisateur']);
    }
  }
} 
