import { LocataireListComponent } from './../../pages/locatairePage/locataire-list/locataire-list.component';
import { Locataire } from 'src/app/model/locataire.model';
import { LocataireService } from 'src/app/services/locataire.service';
import { Component,  Input, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulaire-locataire',
  templateUrl: './formulaire-locataire.component.html',
  styleUrls: ['./formulaire-locataire.component.scss']
})
export class FormulaireLocataireComponent implements OnInit {

  @Input() locataire!: Locataire;
  titreFormulaire!: string

  /**
   * Création du formulaire pour les clients
   */
  formLocataire : FormGroup = this.formBuilder.group({
    prenom: '',
    nom: '',
    mail: '',
    tel:'',
    dateNaissance:''
  })

  constructor(private locataireService : LocataireService,
              private formBuilder : FormBuilder,
              private locataireList: LocataireListComponent) { }

  ngOnInit(): void {
    /**
     * Prérempli le formulaire en cas de mise à jour d'un client
     */
    this.formLocataire.patchValue({
      prenom: this.locataire.prenom,
      nom: this.locataire.nom,
      mail: this.locataire.mail,
      tel: this.locataire.tel,
      dateNaissance: this.locataire.dateNaissance
    });

    this.displayTitle();
  }

  /**
   *  Demande au service de traiter le contenu du formulaire à la validation
   */
  submit(){
      if (this.locataireList.newLocataire){
        this.locataireService.addLocataire(this.formLocataire.value)
      }else {
       this.locataireService.modifier(this.formLocataire.value, this.locataire.id);
      }
      this.annuler();
  }

  /**
   * cache l'affichage du formulaire
   */
  annuler() {
    this.locataireList.cancelNewClient();
    this.locataireList.annulerModificationLocataire;
  }

  /**
   * change le titre du formulaire en fonction du type de formulaire demandé
   */
  displayTitle(){
    if (this.locataireList.modifLocataire){
      this.titreFormulaire = "Modifier locataire"
    }else {
      this.titreFormulaire = "Ajouter locataire"
    }
  }




}
