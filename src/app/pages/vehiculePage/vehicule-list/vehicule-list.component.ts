import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  vehicules !: Vehicule[];
  vehicule !: Vehicule;
  newVehicule!: boolean;
  modifVehicule!: boolean;

  constructor(private vehiculeService: VehiculeService,) { }

  ngOnInit(): void {
    this.newVehicule = false;
    this.modifVehicule = false;
    this.vehicules = this.vehiculeService.getAllVehicules();
  }

  /**
   * affiche le formulaire quand on appuie sur le bouton nouveau véhicule
   */
  creerVehicule() {
    this.newVehicule = true;
    this.modifVehicule = false;
  }

  /**
   * masque le formulaire  de création quand on le valide ou quand on annule la saisie
   */
  cancelNewVehicule() {
    this.newVehicule = false;
  }

  /**
   * Récupère un véhicule par son ID en vu de le modifier
   * @param vehiculeId id du vzehicule
   */
  modifierVehicule(vehiculeId : number){
    this.modifVehicule = true;
    this.newVehicule = false;
    this.vehicule = this.vehiculeService.getVehiculeById(vehiculeId)

  }

  /**
   * masque le formulaire  de mise à jour quand on le valide ou quand on annule la saisie
   */
  cancelUpdateVehicule() {
    this.modifVehicule = false
  }




}
