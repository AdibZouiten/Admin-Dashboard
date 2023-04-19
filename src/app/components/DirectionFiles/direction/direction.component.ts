import { Component } from '@angular/core';
import { DirectionService } from 'src/app/direction.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {

  Directions: any = [];
  Services: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  mainDirections = [];

  constructor(private directionService: DirectionService) { }


  getDirection(): void {
      this.directionService.getDirection().subscribe((res) => {
        this.Directions = res;
        this.mainDirections = res;
        this.collectionSize = this.Directions.length;
        this.refreshUsers();
    });
  }
  ngOnInit(): void {

    this.getDirection();
  }

    //delete a user from the list of users
    delete(event: any, id: any) {
      event.stopPropagation();
      if (confirm(`Etes-vous sûr de vouloir supprimer la Direction`) == true) {
        this.directionService.deleteDirection(id).subscribe((response) => {
          this.getDirection();
        })
      }
  
    }

    refreshUsers() {
      this.Directions = this.mainDirections.map((Directions: any, i: number) => ({ ...Directions })).slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize,
      );
    }


}
