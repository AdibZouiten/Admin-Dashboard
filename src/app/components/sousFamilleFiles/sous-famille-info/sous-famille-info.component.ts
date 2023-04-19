import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SousFamilleService } from 'src/app/sous-famille.service';

@Component({
  selector: 'app-sous-famille-info',
  templateUrl: './sous-famille-info.component.html',
  styleUrls: ['./sous-famille-info.component.css']
})
export class SousFamilleInfoComponent {

  SousFamille: any = null;
  id: any
  loading: Boolean = false;
  error: any = null;

  constructor(private sousFamilleService: SousFamilleService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getDetails();

  }

  getDetails(): any {
    this.loading = true;
    this.sousFamilleService.getSousFamille(this.id).subscribe((response) => {
      this.SousFamille = response
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
      this.error = err;
    });
  }
}
