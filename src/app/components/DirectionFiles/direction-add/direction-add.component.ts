import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DirectionService } from 'src/app/direction.service';
@Component({
  selector: 'app-direction-add',
  templateUrl: './direction-add.component.html',
  styleUrls: ['./direction-add.component.css']
})
export class DirectionAddComponent {

  direction: any = {
    nomDirection: '',
    code: '',
    idDirecteur:'',
  };

  constructor(private router: Router, private directionService: DirectionService) {}

  createDirection(){
    
    this.direction.updatedAt = '';
    this.direction.createdAt = new Date();
    this.direction.id = new Date().getTime();

    this.directionService.create(this.direction).subscribe((response) => this.direction = response);
    alert('Added successfully')
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/direction']);
    }
  }

}
