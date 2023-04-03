import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { ServiceComponent } from './components/service/service.component';
import { DirectionComponent } from './components/direction/direction.component';
import { FamillesComponent } from './components/familles/familles.component';
import { SousfamillesComponent } from './components/sousfamilles/sousfamilles.component';
import { OptionComponent } from './components/option/option.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { UtilisateurInfoComponent } from './components/utilisateur-info/utilisateur-info.component';
import { UtilisateurNotFoundComponent } from './components/utilisateur-not-found/utilisateur-not-found.component';

const routes: Routes = [
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'direction', component: DirectionComponent },
  { path: 'familles', component: FamillesComponent },
  { path: 'sousfamilles', component: SousfamillesComponent },
  { path: 'option', component: OptionComponent },
  { path: 'utilisateur/edit/:id', component: EditComponent },
  { path: 'utilisateur/add', component: AddComponent },
  { path: 'utilisateur/:id', component: UtilisateurInfoComponent },
  { path: 'utilisateur/:name', component: UtilisateurInfoComponent },
  { path: 'utilisateur/**', pathMatch: 'full',component: UtilisateurNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
