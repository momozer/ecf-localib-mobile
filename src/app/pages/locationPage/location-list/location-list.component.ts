import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location.model';
import { Locataire } from '../../../model/locataire.model';
import { Vehicule } from '../../../model/vehicule.model';
import { LocataireService } from '../../../services/locataire.service';
import { LocationService } from '../../../services/location.service';
import { VehiculeService } from '../../../services/vehicule.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  locataires!: Locataire[];
  vehicules!: Vehicule[];
  locations !: Location[];
  location !: Location;
  newLocation !: boolean;
  modifLocation!: boolean;

  constructor(private locationService: LocationService,
              private locataireService : LocataireService,
              private vehiculeService : VehiculeService,
              ) { }

  ngOnInit(): void {
                this.newLocation = false;
                this.modifLocation = false;
                this.locations = this.locationService.getAllLocations();
                this.locataires = this.locataireService.getAllLocataires();
                this.vehicules = this.vehiculeService.getAllVehicules();
              
              }

  /**
   * affiche le formulaire quand on appuie sur le bouton nouvel utilisateur
   */
  creerLocation() {
    this.newLocation = true;
    this.modifLocation = false;
  }

  /**
   * masque le formulaire  de création quand on le valide ou quand on annule la saisie
   */
  cancelNewLocation() {
    this.newLocation = false;
  }

  /**
   * Récupère un client par son ID en vu de le modifier
   * @param locationId id du client
   */
  modifierLocation(locationId: number) {
    this.modifLocation = true;
    this.newLocation = false;
    this.location = this.locationService.getLocationById(locationId);
  }
  /**
   * masque le formulaire  de mise à jour quand on le valide ou quand on annule la saisie
   */
  annulerModificationLocation() {
    this.modifLocation = false;
  }

}
