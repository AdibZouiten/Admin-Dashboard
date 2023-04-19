import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SousFamilleService } from 'src/app/sous-famille.service';

@Component({
  selector: 'app-sous-famille-edit',
  templateUrl: './sous-famille-edit.component.html',
  styleUrls: ['./sous-famille-edit.component.css']
})
export class SousFamilleEditComponent {


  sousFamille: any = null;
  id : any 

  constructor(private route: ActivatedRoute, private sousFamilleService: SousFamilleService,private router: Router) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();
    
  }

  getDetails(): any {
    this.sousFamilleService.getSousFamille(this.id).subscribe((response) => this.sousFamille = response);
  }

  edit() {
    this.sousFamille.updatedAt = new Date();

    this.sousFamilleService.update(this.sousFamille.id,this.sousFamille).subscribe((response) => this.sousFamille = response);
    
    alert('Updated successfully')
    
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/sousFamille']);
    }
  }
}
