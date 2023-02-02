import { VehiculeService } from 'src/app/services/vehicule.service';
import { LocationListComponent } from '../../pages/locationPage/location-list/location-list.component';
import { LocationService } from './../../services/location.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Locataire } from 'src/app/model/locataire.model';
import { Location } from 'src/app/model/location.model';
import { Vehicule } from 'src/app/model/vehicule.model';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-formulaire-location',
  templateUrl: './formulaire-location.component.html',
  styleUrls: ['./formulaire-location.component.scss']
})
export class FormulaireLocationComponent implements OnInit {

  @Input() location!: Location;
  locataires!: Locataire[];
  vehicules!: Vehicule[];
  locataire!: Locataire;
  vehicule!: Vehicule;

  titreFormulaire: string = "Nouvelle location"

  formLocation : FormGroup = this.formBuilder.group({
    locataire : Locataire,
    vehicule : Vehicule,
    dateDebut : Date,
    dateFin : Date
  })

  constructor(private locationService : LocationService,
              private formBuilder : FormBuilder,
              private locationList : LocationListComponent,
              private locataireService : LocataireService,
              private vehiculeService : VehiculeService) { }

  ngOnInit(): void {
    this.locataires = this.locataireService.getAllLocataires();
    this.vehicules = this.vehiculeService.getAllVehicules();

    /**
     * Prérempli le formulaire en cas de mise à jour d'une location
     */
    this.formLocation.patchValue({
      user : this.location.locataire.id + this.location.locataire.nom + this.location.locataire.prenom + this.location.locataire.mail,
      vehicle : this.location.vehicule.id + this.location.vehicule.marque + this.location.vehicule.modele,
      startDate : this.location.dateDebut,
      endDate : this.location.dateFin
    })

    /**
     * Affiche l'entête du formulaire
     */
    this.displayTitle();

  }

  /**
   * Demande au service de traiter le contenu du formulaire à la validation
   */
  onSubmit(){
    if (this.locationList.newLocation){
      //Récupération du client
      let identity = this.formLocation.controls['locataire'].value;
      let identityTab = identity.split(" ");
      this.locataire = this.locataireService.getLocataireById(Number(identityTab[0]));
     
      let vehicule = this.formLocation.controls['vehicule'].value;
      let vehiculeTab = vehicule.split(" ")
      this.vehicule = this.vehiculeService.getVehiculeById(Number(vehiculeTab[0]))
      
      let dateDebutValue = this.formLocation.controls['dateDebut'].value;
      let dateDebut = new Date(dateDebutValue)
      let finDateValue = this.formLocation.controls['endDate'].value;
      let dateFin = new Date(finDateValue)
   
      this.locationService.addLocation(this.locataire,this.vehicule , dateDebut, dateFin )
    } else {     
      let dateDebutValue = this.formLocation.controls['dateDebut'].value;
      let dateDebut = new Date(dateDebutValue)
      let dateFinValue = this.formLocation.controls['dateFin'].value;
      let dateFin = new Date(dateFinValue)
      //envoi de la demande de mise à jour au service
      this.locationService.modifier(this.locataire, this.vehicule,dateDebut, dateFin,this.location.id)
    }
    this.annuler();
  }

  /**
   * Cache l'affichage du formulaire
   */
  annuler(){
    this.locationList.cancelNewLocation();
    this.locationList.annulerModificationLocation();
  }

  /**
   * change le titre du formulaire en fonction du type de formulaire demandé
   */
  displayTitle() {
    if (this.locationList.modifLocation) {
      this.titreFormulaire = "Modifier location"
    } else {
      this.titreFormulaire = "Nouvelle location"
    }
  }
}
