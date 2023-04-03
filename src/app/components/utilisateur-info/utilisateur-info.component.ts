import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-utilisateur-info',
  templateUrl: './utilisateur-info.component.html',
  styleUrls: ['./utilisateur-info.component.css']
})
export class UtilisateurInfoComponent {


  utilisateur: any = null;
  id: any
  loading: Boolean = false;
  error: any = null;

  constructor(private utilisateursService: UtilisateursService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();

  }

  getDetails(): any {
    this.loading = true;
    this.utilisateursService.getUtilisateur(this.id).subscribe((response) => {
      this.utilisateur = response
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
      this.error = err;
    });
  }


}
