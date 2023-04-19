import { Component } from '@angular/core';
import { SousFamilleService } from 'src/app/sous-famille.service';
@Component({
  selector: 'app-sousfamilles',
  templateUrl: './sousfamilles.component.html',
  styleUrls: ['./sousfamilles.component.css']
})
export class SousfamillesComponent {

  sousFamilles: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  mainsousFamilles = [];

  constructor(private sousFamilleService: SousFamilleService) {}

  //list the users
  getSousFamille(): void {
    this.sousFamilleService.getSousFamille().subscribe((res) => {
      this.sousFamilles = res;
      this.mainsousFamilles = res;
      this.collectionSize = this.sousFamilles.length;
      this.refreshUsers();
    });
  }
      //delete a user from the list of users
      delete(event: any, id: any) {
        event.stopPropagation();
        if (confirm(`Etes-vous sûr de vouloir supprimer la sous famille`) == true) {
          this.sousFamilleService. deleteSousFamille(id).subscribe((response) => {
            this.getSousFamille();
          })
        }
    
      }
      ngOnInit(): void {

        this.getSousFamille();
      }

      refreshUsers() {
        this.sousFamilles = this.mainsousFamilles.map((sousFamilles: any, i: number) => ({ ...sousFamilles })).slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize,
        );
      }
}
