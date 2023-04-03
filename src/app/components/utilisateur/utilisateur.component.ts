import { Component } from '@angular/core';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {

  utilisateurs:any = [];

  constructor(private utilisateursService : UtilisateursService){}

  //list the users
  getUtilisateur(): void {
    this.utilisateursService.getUtilisateur().subscribe((utilisateurs)=> this.utilisateurs = utilisateurs);
  }
  ngOnInit(): void {
    this.getUtilisateur();
  }
  //delete a user from the list of users
  delete(id: any){
    if (confirm(`Etes-vous sûr de vouloir supprimer l'utilisateur`) == true) {
      this.utilisateursService.deleteUtilisateur(id).subscribe((response)=>{
        this.getUtilisateur();
      })
    }
    
  }
  


}
