import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectionService } from 'src/app/direction.service';
@Component({
  selector: 'app-direction-info',
  templateUrl: './direction-info.component.html',
  styleUrls: ['./direction-info.component.css']
})
export class DirectionInfoComponent {

  direction: any = null;
  id: any
  loading: Boolean = false;
  error: any = null;

  constructor(private directionService: DirectionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();

  }

  getDetails(): any {
    this.loading = true;
    this.directionService.getDirection(this.id).subscribe((response) => {
      this.direction = response
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
      this.error = err;
    });
  }

}
