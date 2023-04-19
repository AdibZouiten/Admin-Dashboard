import { Component } from '@angular/core';
import { FamillesService } from 'src/app/familles.service';

@Component({
  selector: 'app-familles',
  templateUrl: './familles.component.html',
  styleUrls: ['./familles.component.css']
})
export class FamillesComponent {

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  Familles: any = [];
  mainFamilles = [];


  constructor(private famillesService: FamillesService) {}


    //list the users
    getFamilles(): void {
      this.famillesService.getFamilles().subscribe((res) => {
        this.Familles = res;
        this.mainFamilles = res;
        this.collectionSize = this.Familles.length;
        this.refreshUsers();
      });
    }

    ngOnInit(): void {
            
      this.getFamilles();
  
    }

      //delete a user from the list of users
    delete(event: any, id: any) {
      event.stopPropagation();
      if (confirm(`Etes-vous sûr de vouloir supprimer la Famille`) == true) {
        this.famillesService.deleteFamilles(id).subscribe((response) => {
          this.getFamilles();
        })
      }
    }

    refreshUsers() {
      this.Familles = this.mainFamilles.map((Familles: any, i: number) => ({ ...Familles })).slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize,
      );
    }


}
