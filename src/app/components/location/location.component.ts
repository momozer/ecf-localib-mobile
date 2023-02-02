import { Locataire } from 'src/app/model/locataire.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { LocationListComponent } from 'src/app/pages/locationPage/location-list/location-list.component';
import { Vehicule } from 'src/app/model/vehicule.model';
import { Location } from 'src/app/model/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input()location !: Location;
  vehicules : Vehicule[] = [];
  locataires : Locataire[] = [];
  vehicule !: Vehicule;
  locataire!:Locataire;
  locations!:Location[];

  constructor(
    private locationService : LocationService,
    private listLocation : LocationListComponent,
    private router : Router,
    ) { }


      /**
     * La fonction onDetail() est appelée lorsque l'utilisateur clique sur le bouton "Détails". Il
     * accède au composant location-detail
     */
      

        onSupprimer(){
          this.locationService.supprimer(this.location.id)
        }
        onModifier(){
          this.listLocation.modifierLocation(this.location.id)
        }
      
  ngOnInit(): void {
  }
}
