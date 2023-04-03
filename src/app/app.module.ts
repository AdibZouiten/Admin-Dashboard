import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { ServiceComponent } from './components/service/service.component';
import { DirectionComponent } from './components/direction/direction.component';
import { FamillesComponent } from './components/familles/familles.component';
import { SousfamillesComponent } from './components/sousfamilles/sousfamilles.component';
import { OptionComponent } from './components/option/option.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddComponent } from './components/add/add.component';
import { UtilisateurInfoComponent } from './components/utilisateur-info/utilisateur-info.component';
import { UtilisateurNotFoundComponent } from './components/utilisateur-not-found/utilisateur-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    UtilisateurComponent,
    ServiceComponent,
    DirectionComponent,
    FamillesComponent,
    SousfamillesComponent,
    OptionComponent,
    EditComponent,
    AddComponent,
    UtilisateurInfoComponent,
    UtilisateurNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
