import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LocataireComponent } from './components/locataire/locataire.component';
import { LocataireListComponent } from './pages/locatairePage/locataire-list/locataire-list.component';
import { SingleLocataireComponent } from './pages/locatairePage/single-locataire/single-locataire.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { FormulaireLocataireComponent } from './components/formulaire-locataire/formulaire-locataire.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { VehiculeListComponent } from './pages/vehiculePage/vehicule-list/vehicule-list.component';
import { FormulaireVehiculeComponent } from './components/formulaire-vehicule/formulaire-vehicule.component';
import { LocationComponent } from './components/location/location.component';
import { FormulaireLocationComponent } from './components/formulaire-location/formulaire-location.component';
import { LocationListComponent } from './pages/locationPage/location-list/location-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocataireComponent,
    LocataireListComponent,
    SingleLocataireComponent,
    AccueilComponent,
    FormulaireLocataireComponent,
    VehiculeComponent,
    VehiculeListComponent,
    FormulaireVehiculeComponent,
    LocationComponent,
    FormulaireLocationComponent,
    LocationListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }
