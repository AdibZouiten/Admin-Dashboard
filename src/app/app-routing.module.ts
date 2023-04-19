import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './components/UtilisateurFiles/utilisateur/utilisateur.component';
import { ServiceComponent } from './components/ServiceFiles/service/service.component';
import { DirectionComponent } from './components/DirectionFiles/direction/direction.component';
import { EditComponent } from './components/UtilisateurFiles/edit/edit.component';
import { AddComponent } from './components/UtilisateurFiles/add/add.component';
import { UtilisateurInfoComponent } from './components/UtilisateurFiles/utilisateur-info/utilisateur-info.component';
import { ServiceInfoComponent } from './components/ServiceFiles/service-info/service-info.component';
import { ServiceAddComponent } from './components/ServiceFiles/service-add/service-add.component';
import { DirectionAddComponent } from './components/DirectionFiles/direction-add/direction-add.component';
import { DirectionInfoComponent } from './components/DirectionFiles/direction-info/direction-info.component';
import { DirectionEditComponent } from './components/DirectionFiles/direction-edit/direction-edit.component';
import { FamillesComponent } from './components/FamillesFiles/familles/familles.component';
import { FamillesInfoComponent } from './components/FamillesFiles/familles-info/familles-info.component';
import { SousfamillesComponent } from './components/sousFamilleFiles/sousfamilles/sousfamilles.component';
import { SousFamilleInfoComponent } from './components/sousFamilleFiles/sous-famille-info/sous-famille-info.component';
import { ServiceEditComponent } from './components/ServiceFiles/service-edit/service-edit.component';
import { FamillesEditComponent } from './components/FamillesFiles/familles-edit/familles-edit.component';
import { FamillesAddComponent } from './components/FamillesFiles/familles-add/familles-add.component';
import { SousFamilleAddComponent } from './components/sousFamilleFiles/sous-famille-add/sous-famille-add.component';
import { SousFamilleEditComponent } from './components/sousFamilleFiles/sous-famille-edit/sous-famille-edit.component';

const routes: Routes = [
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'direction', component: DirectionComponent },
  { path: 'familles', component: FamillesComponent },
  { path: 'sousfamilles', component: SousfamillesComponent },
  { path: 'utilisateur/edit/:id', component: EditComponent },
  { path: 'utilisateur/add', component: AddComponent },
  { path: 'utilisateur/:id', component: UtilisateurInfoComponent },
  { path: 'utilisateur/:name', component: UtilisateurInfoComponent },
  { path: 'service/add', component: ServiceAddComponent },
  { path: 'service/:id', component: ServiceInfoComponent },
  { path: 'service/edit/:id', component: ServiceEditComponent },
  { path: 'direction/add', component: DirectionAddComponent },
  { path: 'direction/:id', component: DirectionInfoComponent },
  { path: 'direction/edit/:id', component: DirectionEditComponent },
  { path: 'familles/add', component: FamillesAddComponent },
  { path: 'familles/:id', component: FamillesInfoComponent },
  { path: 'familles/edit/:id', component: FamillesEditComponent },
  { path:'sousfamilles/add', component: SousFamilleAddComponent},
  { path:'sousfamilles/:id', component: SousFamilleInfoComponent},
  { path:'sousfamilles/edit/:id', component: SousFamilleEditComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
