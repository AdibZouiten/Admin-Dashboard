import { Component, PipeTransform } from '@angular/core';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';



@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],

})
export class UtilisateurComponent {
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  utilisateurs: any = [];
  mainUtilisateurs = [];




  constructor(private utilisateursService: UtilisateursService) {

  }

  //list the users
  getUtilisateur(): void {
    this.utilisateursService.getUtilisateur().subscribe((res) => {
      this.utilisateurs = res;
      this.mainUtilisateurs = res;
      this.collectionSize = this.utilisateurs.length;
      this.refreshUsers();
    });
  }





  ngOnInit(): void {
    this.getUtilisateur();

  }
  //delete a user from the list of users
  delete(event: any, id: any) {
    event.stopPropagation();
    if (confirm(`Etes-vous sûr de vouloir supprimer l'utilisateur`) == true) {
      this.utilisateursService.deleteUtilisateur(id).subscribe((response) => {
        this.getUtilisateur();
      })
    }

  }

  refreshUsers() {
    this.utilisateurs = this.mainUtilisateurs.map((utilisateur: any, i: number) => ({ ...utilisateur })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }





}
