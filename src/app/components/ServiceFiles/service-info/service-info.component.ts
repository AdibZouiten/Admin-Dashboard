import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent {

  Services: any = null;
  id: any
  loading: Boolean = false;
  error: any = null;

  constructor(private serviceService: ServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();

  }

  getDetails(): any {
    this.loading = true;
    this.serviceService.getService(this.id).subscribe((response) => {
      this.Services = response
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
      this.error = err;
    });
  }
}
