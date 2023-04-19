import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { UtilisateurComponent } from './components/UtilisateurFiles/utilisateur/utilisateur.component';
import { ServiceComponent } from './components/ServiceFiles/service/service.component';
import { DirectionComponent } from './components/DirectionFiles/direction/direction.component';

import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './components/UtilisateurFiles/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddComponent } from './components/UtilisateurFiles/add/add.component';
import { UtilisateurInfoComponent } from './components/UtilisateurFiles/utilisateur-info/utilisateur-info.component';
import { OffcanvasSidebarComponent } from "./components/offcanvas-sidebar/offcanvas-sidebar.component";
import { ServiceInfoComponent } from './components/ServiceFiles/service-info/service-info.component';
import { ServiceAddComponent } from './components/ServiceFiles/service-add/service-add.component';
import { DirectionAddComponent } from './components/DirectionFiles/direction-add/direction-add.component';
import { DirectionEditComponent } from './components/DirectionFiles/direction-edit/direction-edit.component';
import { DirectionInfoComponent } from './components/DirectionFiles/direction-info/direction-info.component';
import { FamillesEditComponent } from './components/FamillesFiles/familles-edit/familles-edit.component';

import { FamillesInfoComponent } from './components/FamillesFiles/familles-info/familles-info.component';
import { FamillesComponent } from './components/FamillesFiles/familles/familles.component';
import { SousfamillesComponent } from './components/sousFamilleFiles/sousfamilles/sousfamilles.component';

import { SousFamilleAddComponent } from './components/sousFamilleFiles/sous-famille-add/sous-famille-add.component';
import { SousFamilleEditComponent } from './components/sousFamilleFiles/sous-famille-edit/sous-famille-edit.component';
import { SousFamilleInfoComponent } from './components/sousFamilleFiles/sous-famille-info/sous-famille-info.component';
import { ServiceEditComponent } from './components/ServiceFiles/service-edit/service-edit.component';
import { FamillesAddComponent } from './components/FamillesFiles/familles-add/familles-add.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    UtilisateurComponent,
    ServiceComponent,
    SousfamillesComponent,

    EditComponent,
    AddComponent,
    UtilisateurInfoComponent,
    OffcanvasSidebarComponent,
    ServiceInfoComponent,
    ServiceAddComponent,
    DirectionComponent,
    DirectionAddComponent,
    DirectionEditComponent,
    DirectionInfoComponent,
    FamillesEditComponent,
    FamillesInfoComponent,
    FamillesComponent,
    SousFamilleAddComponent,
    SousFamilleEditComponent,
    SousFamilleInfoComponent,
    ServiceEditComponent,
    FamillesAddComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
