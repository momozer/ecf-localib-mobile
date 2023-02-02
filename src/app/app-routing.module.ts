import { LocataireListComponent } from './pages/locatairePage/locataire-list/locataire-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleLocataireComponent } from './pages/locatairePage/single-locataire/single-locataire.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VehiculeListComponent } from './pages/vehiculePage/vehicule-list/vehicule-list.component';
import { LocationListComponent } from './pages/locationPage/location-list/location-list.component';

/* Définition des routes de l'application. */
const routes: Routes = [
  {path:'' , component: AccueilComponent} ,
  {path:'locataires' , component: LocataireListComponent} ,
  {path:'locataires/:id' , component: SingleLocataireComponent} ,
  {path:'vehicules' , component: VehiculeListComponent},
  {path:'locations', component : LocationListComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
