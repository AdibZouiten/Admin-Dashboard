import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SousFamilleService } from 'src/app/sous-famille.service';

@Component({
  selector: 'app-sous-famille-add',
  templateUrl: './sous-famille-add.component.html',
  styleUrls: ['./sous-famille-add.component.css']
})
export class SousFamilleAddComponent {

  sousFamilles: any = {
    nomSousFamille: '',
    idFamille: '',
  };

  constructor(private router: Router, private sousFamilleService: SousFamilleService) {}


  createSousFamille(){
    
    this.sousFamilles.updatedAt = '';
    this.sousFamilles.createdAt = new Date();
    this.sousFamilles.id = new Date().getTime();

    this.sousFamilleService.create(this.sousFamilles).subscribe((response) => this.sousFamilles = response);
    alert('Added successfully')
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/sousfamilles']);
    }
  }
}

