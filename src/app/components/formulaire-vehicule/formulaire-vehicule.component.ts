import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeListComponent } from 'src/app/pages/vehiculePage/vehicule-list/vehicule-list.component';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-formulaire-vehicule',
  templateUrl: './formulaire-vehicule.component.html',
  styleUrls: ['./formulaire-vehicule.component.scss']
})
export class FormulaireVehiculeComponent implements OnInit {

  @Input() vehicule!: Vehicule;

  titreFormulaire!: string

  /**
   * Création du formulaire pour les véhicules
   */
  formVehicule : FormGroup = this.formBuilder.group({
    type: '',
    marque: '',
    modele: '',
    immatriculation: '',
    etat: '',
    prix: 0,
    statut: ''
  })

  constructor(private vehiculeService : VehiculeService,
              private formBuilder : FormBuilder,
              private vehiculeList : VehiculeListComponent) { }

  ngOnInit(): void {
    /**
     * Prérempli le formulaire lorsque l'on veut modifier un véhicule
     */
    this.formVehicule.patchValue({
      type: this.vehicule.type,
      marque: this.vehicule.marque,
      modele: this.vehicule.modele,
      immatriculation: this.vehicule.immatriculation,
      etat: this.vehicule.etat,
      prix: this.vehicule.prix,
      statut: this.vehicule.statut
    })

    this.displayTitle();
  }

  /**
   *  Demande au service de traiter le contenu du formulaire à la validation
   */
  submit(){
    if (this.vehiculeList.newVehicule){
      this.vehiculeService.addVehicule(this.formVehicule.value)
    } else {
      this.vehiculeService.modifier(this.formVehicule.value, this.vehicule.id)
    }
    this.annuler();

  }

  /**
   * cache l'affichage du formulaire
   */
  annuler(){
    this.vehiculeList.cancelNewVehicule()
    this.vehiculeList.cancelUpdateVehicule();
  }

  /**
   * change le titre du formulaire en fonction du type de formulaire demandé
   */
  displayTitle(){
    if (this.vehiculeList.modifVehicule){
      this.titreFormulaire = "Modifier véhicule"
    }else{
      this.titreFormulaire = "Ajouter véhicule"
    }
  }
}
