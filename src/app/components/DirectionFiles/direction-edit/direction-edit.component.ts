import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DirectionService } from 'src/app/direction.service';

@Component({
  selector: 'app-direction-edit',
  templateUrl: './direction-edit.component.html',
  styleUrls: ['./direction-edit.component.css']
})
export class DirectionEditComponent {

  direction: any = null;
  id : any 

  constructor(private route: ActivatedRoute, private directionService: DirectionService,private router: Router) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();
    
  }

  getDetails(): any {
    this.directionService.getDirection(this.id).subscribe((response) => this.direction = response);
  }

  editDirection() {
    this.direction.updatedAt = new Date();

    this.directionService.update(this.direction.id,this.direction).subscribe((response) => this.direction = response);
    
    alert('Updated successfully')
    
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/direction']);
    }
  }

}
