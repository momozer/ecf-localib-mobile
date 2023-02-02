import { Injectable } from '@angular/core';
import { Locataire } from '../model/locataire.model';
import { Vehicule } from '../model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

vehiculemodif !: Vehicule;

  /**
   * tableau de vehicule.
  */
  vehicules: Vehicule[] = [
    
    new Vehicule (1,"A", "AF541DE","Citroen", "C4",40, "disponible","voiture", "https://www.bing.com/th?id=OAID.b049f176d985c12769970001da666efd&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&pid=16.1"),
    new Vehicule (2, "B", "AF200ll", "Yamaha", "125", 80, "non disponible", "moto", "https://www.bing.com/th?id=OAID.4b3de181cfd1146b9a92c22967f8f278&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&pid=16.1"),
    new Vehicule (3,"C", "AF541DE","Peugeot", "205",25, "disponible","voiture", "https://th.bing.com/th/id/OIP.QQiXDBdDbbuI5eiDjic3PwHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7"),
    
  ];

  /**
   * Il renvoie un tableau d'objets Vehicule
   * @returns Un tableau d'objets Véhicule.
   */
  getAllVehicules() : Vehicule[]{
    return this.vehicules;
  }
  /**
   * Il renvoie un objet vehicule du tableau vehicules, si le vehicule existe, sinon il lance une erreur
   * @param {string} vehiculeId - chaîne de caractères
   * @returns le véhicule avec l'id donnée.
   */
  getVehiculeById(vehiculeId: number): Vehicule {
    const vehicule = this.vehicules.find(vehicule => vehicule.id === vehiculeId);
    if(!vehicule){
      throw new Error("Vehicule non existant");
    }else{
      return vehicule;
    }
  }
  
  /**
  * La fonction prend un véhicule en paramètre et l'ajoute au tableau des véhicules
  * @param {Vehicule} vehicule - Véhicule - c'est le paramètre que nous passons dans la fonction. C'est
  * un objet Véhicule.
   */
  addVehicule(vehicule:Vehicule){
    vehicule.id = this.vehicules.length +1;
    this.vehicules.push(vehicule);
  }
  
  /**
   * Il supprime le véhicule de la liste.
   * @param {number} vehiculeid - L'identifiant du véhicule à supprimer.
   */
  supprimer(vehiculeid:number): void{
      this.vehicules.splice(vehiculeid -1, 1);
    }

   /**
    * Il prend un objet vehiculemodif et un numéro vehiculeId comme paramètres, puis il fixe l'objet
    * vehiculemodif à l'objet vehicule renvoyé par la fonction getVehiculeById, puis il fixe les
    * propriétés etat, immatriculation, marque, modele, statut et type de l'objet vehiculemodif aux
    * valeurs de les propriétés état, immatriculation, marque, modele, statut et type de l'objet
    * vehiculemodif.
    * @param {Vehicule} vehiculemodif - Véhicules
    * @param {number} vehiculeId - Numéro
    */
    modifier(vehiculemodif:Vehicule, vehiculeId : number){
      this.vehiculemodif = (this.getVehiculeById(vehiculeId));
      this.vehiculemodif.setEtat(vehiculemodif.etat);
      this.vehiculemodif.setImmatriculation(vehiculemodif.immatriculation);
      this.vehiculemodif.setMarque(vehiculemodif.marque);
      this.vehiculemodif.setModele(vehiculemodif.modele);
      this.vehiculemodif.setStatut(vehiculemodif.statut);
      this.vehiculemodif.setType(vehiculemodif.type);
      
    }
    
    constructor() { }
  }
  