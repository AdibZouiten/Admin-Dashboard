import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  utilisateur: any = null;
  id : any 

  constructor(private route: ActivatedRoute, private utilisateursService: UtilisateursService,private router: Router) {
  }


  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();
    
  }

  getDetails(): any {
    this.utilisateursService.getUtilisateur(this.id).subscribe((response) => this.utilisateur = response);
  }

  editUtilisateur() {
    this.utilisateur.updatedAt = new Date();

    this.utilisateursService.update(this.utilisateur.id,this.utilisateur).subscribe((response) => this.utilisateur = response);
    
    alert('Updated successfully')
    
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/utilisateur']);
    }
  }

}
