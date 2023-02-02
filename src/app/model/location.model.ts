import { Locataire } from "./locataire.model";
import { Vehicule } from "./vehicule.model";

export class Location {
  id !: number;
  dateDebut !: Date;
  dateFin !: Date;
  locataire !: Locataire;
  vehicule !: Vehicule;

  /**
   * La fonction constructeur est une fonction spéciale appelée lorsqu'un objet est créé à partir d'une
   * classe
   * @param {number} id - number, dateDebut: Date, dateFin: Date, prixTotal: number, locataire:
   * Locataire, vehicule: Vehicule
   * @param {number} prixTotal - Numéro
   * @param {Locataire} locataire - Locataire
   * @param {Vehicule} vehicule - Véhicules
   */
  constructor(id: number, dateDebut:Date, dateFin: Date, locataire: Locataire, vehicule: Vehicule) {
    this.id = id;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.locataire = locataire;
    this.vehicule = vehicule;
  }

  //Getter et Setter:
  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getDateDebut() {
    return this.dateDebut;
  }

  setDateDebut(dateDebut: Date) {
    this.dateDebut = dateDebut;
  }

  getDateFin() {
    return this.dateFin;
  }

  setDateFin(dateFin: Date) {
    this.dateFin = dateFin;
  }

  getLocataire() {
    return this.locataire;
  }

  setLocataire(locataire: Locataire) {
    this.locataire = locataire;
  }
  getVehicule() {
    return this.vehicule;
  }

  setVehicule(vehicule: Vehicule) {
    this.vehicule = vehicule;
  }
}