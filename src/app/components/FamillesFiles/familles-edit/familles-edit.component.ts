import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FamillesService } from 'src/app/familles.service';


@Component({
  selector: 'app-familles-edit',
  templateUrl: './familles-edit.component.html',
  styleUrls: ['./familles-edit.component.css']
})
export class FamillesEditComponent {

  familles: any = null;
  id : any 

  constructor(private route: ActivatedRoute, private famillesService: FamillesService,private router: Router) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();
    
  }

  getDetails(): any {
    this.famillesService.getFamilles(this.id).subscribe((response) => this.familles = response);
  }


  
  edit() {
    this.familles.updatedAt = new Date();

    this.famillesService.update(this.familles.id,this.familles).subscribe((response) => this.familles = response);
    
    alert('Updated successfully')
    
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/familles']);
    }
  }
}
