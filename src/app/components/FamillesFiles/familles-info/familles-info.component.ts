import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FamillesService } from 'src/app/familles.service';

@Component({
  selector: 'app-familles-info',
  templateUrl: './familles-info.component.html',
  styleUrls: ['./familles-info.component.css']
})
export class FamillesInfoComponent {

  familles: any = null;
  id: any
  loading: Boolean = false;
  error: any = null;

  constructor(private famillesService: FamillesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();

  }

  getDetails(): any {
    this.loading = true;
    this.famillesService.getFamilles(this.id).subscribe((response) => {
      this.familles = response
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
      this.error = err;
    });
  }


}
