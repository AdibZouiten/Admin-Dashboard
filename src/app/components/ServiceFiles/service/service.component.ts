import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {


  Services: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  mainServices = [];

  constructor(private serviceService: ServiceService) {}


    //list the users
    getService(): void {
      this.serviceService.getService().subscribe((res) => {
        this.Services = res;
        this.mainServices = res;
        this.collectionSize = this.Services.length;
        this.refreshUsers();
      });

    }

      //delete a user from the list of users
  delete(event: any, id: any) {
    event.stopPropagation();
    if (confirm(`Etes-vous sûr de vouloir supprimer l'utilisateur`) == true) {
      this.serviceService. deleteService(id).subscribe((response) => {
        this.getService();
      })
    }

  }

    ngOnInit(): void {
      console.log(this.Services);
      
      this.getService();
    }

    refreshUsers() {
      this.Services = this.mainServices.map((Services: any, i: number) => ({ ...Services })).slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize,
      );
    }

}
