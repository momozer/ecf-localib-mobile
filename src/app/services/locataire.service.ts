  import { Injectable } from '@angular/core';
import { Locataire } from '../model/locataire.model';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {
  locatairemodif !: Locataire;

  /**
   * tableau de locataire.
   */
  locataires : Locataire[] = [
    
      new Locataire ( 1, "Mohamed", "Le che", "15/08/1996", "mohamed@mail.com", "0608050906"),
      new Locataire ( 2,"John","Doe","17/01/1956", "johndoe@mail.com", "0608050906"), 
  ];

  getAllLocataires(): Locataire[] {
    return this.locataires;
  }

 /**
  * Il renvoie un objet locataire du tableau locataires, étant donné un identifiant locataire
  * @param {number} locataireId - Numéro
  * @returns Le locataire avec l'identifiant passé en paramètre.
  */
 
  getLocataireById(locataireId: number): Locataire {
    const locataire = this.locataires.find(locataire => locataire.id === locataireId);
    if (!locataire) {
      throw new Error ('Locataire non trouvé');
    }else {
      return locataire;
    }
  }

  /**
   * Il prend un objet locataire comme argument et l'ajoute au tableau locataires
   * @param {Locataire} locataire - Locataire est le paramètre que nous passons dans la fonction.
   */
  addLocataire(locataire: Locataire){
    locataire.id = this.locataires.length + 1;
    this.locataires.push(locataire);
  }
  

 /**
  * Il supprime l'élément à l'index du tableau qui correspond à l'id du locataire
  * @param {number} locataireId - Numéro
  */
  supprimer(locataireId : number): void{
    this.locataires.splice(locataireId -1 ,1);
  }

  modifier(locataireModifier: Locataire, locataireId: number){
    this.locatairemodif = (this.getLocataireById(locataireId));
    this.locatairemodif.setPrenom(locataireModifier.prenom);
    this.locatairemodif.setNom(locataireModifier.nom);
    this.locatairemodif.setMail(locataireModifier.mail);
    this.locatairemodif.setDateNaissance(locataireModifier.dateNaissance);
  }


  constructor() { }
}
