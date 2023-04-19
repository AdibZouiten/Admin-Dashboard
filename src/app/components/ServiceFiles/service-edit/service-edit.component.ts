import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent {

    Service: any = null;
    id : any 

    constructor(private route: ActivatedRoute, private serviceService: ServiceService,private router: Router) {}

    ngOnInit(): void {
      this.id = String(this.route.snapshot.paramMap.get('id'));
      this.getDetails();
      
    }

    getDetails(): any {
      this.serviceService.getService(this.id).subscribe((response) => this.Service = response);
    }

    
  editService() {
    this.Service.updatedAt = new Date();

    this.serviceService.update(this.Service.id,this.Service).subscribe((response) => this.Service = response);
    
    alert('Updated successfully')
    
    if(window.confirm('Go back to the homepage'))
    {
      this.router.navigate(['/service']);
    }
  }
}
