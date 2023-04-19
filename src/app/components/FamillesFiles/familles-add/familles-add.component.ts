import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FamillesService } from 'src/app/familles.service';


@Component({
  selector: 'app-familles-add',
  templateUrl: './familles-add.component.html',
  styleUrls: ['./familles-add.component.css']
})
export class FamillesAddComponent {

  famille: any = {
    nomFamille: '',
    idDirection: '',
  };

constructor(private router: Router, private famillesService: FamillesService) {}

createFamille(){

    this.famille.updatedAt = '';
    this.famille.createdAt = new Date();
    this.famille.id = new Date().getTime();

    this.famillesService.create(this.famille).subscribe((response) => this.famille = response);
    alert('Added successfully')
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/famille']);
    }
  }

}
