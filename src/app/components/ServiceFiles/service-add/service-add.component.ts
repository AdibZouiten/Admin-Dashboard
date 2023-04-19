import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent {

  Services: any = {
    id: '',
    nomService: '',
    updatedAt: '',
    createdAt: '',
    idDirection: '',
    idChefService: '',
  };

  constructor(private router: Router, private serviceService: ServiceService) {}

  createService(){
    
    this.Services.updatedAt = '';
    this.Services.createdAt = new Date();
    this.Services.id = new Date().getTime();

    this.serviceService.create(this.Services).subscribe((response) => this.Services = response);
    alert('Added successfully')
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/service']);
    }
  }

}
