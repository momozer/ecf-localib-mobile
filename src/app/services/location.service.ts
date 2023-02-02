import { Locataire } from 'src/app/model/locataire.model';
import { Injectable } from '@angular/core';
import { Location } from '../model/location.model';
import { Vehicule } from '../model/vehicule.model';
import { VehiculeService } from './vehicule.service';
import { LocataireService } from './locataire.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  locationmodif !: Location;
  vehicule !: Vehicule;
  locataire!: Locataire;
  
  constructor(private locataireService : LocataireService,
    private vehiculeService : VehiculeService) { }
  /**
   * tableau de location.
   */
  locations : Location[] = [
    new Location(1,new Date(), new Date(), this.locataireService.getLocataireById(1), this.vehiculeService.getVehiculeById(1) ),
    new Location(2, new Date(), new Date(), this.locataireService.getLocataireById(2), this.vehiculeService.getVehiculeById(2) ),
    ];

  getAllLocations(): Location[] {
    return this.locations;
  }

 /**
  * Il renvoie un objet locataire du tableau locations, étant donné un identifiant location
  * @param {number} locationId - Numéro
  * @returns La location avec l'identifiant passé en paramètre.
  */
 
  getLocationById(locationId: number): Location {
    const location = this.locations.find(location => location.id === locationId);
    if (!location) {
      throw new Error ('Location non trouvée');
    }else {
      return location;
    }
  }

  /**
   * Il prend un objet location comme argument et l'ajoute au tableau locations
   * @param {Location} location - Location est le paramètre que nous passons dans la fonction.
   */
  addLocation(locataire : Locataire, vehicule:Vehicule, dateDebut:Date,dateFin:Date){
    let id = this.locations.length + 1;
    let location = new Location(id, dateDebut, dateFin, locataire, vehicule);
    this.locations.push(location)
   
  }
  

 /**
  * Il supprime l'élément à l'index du tableau qui correspond à l'id du location
  * @param {number} locationId - Numéro
  */
  supprimer(locationId : number): void{
    this.locations.splice(locationId -1 ,1);
  }

  modifier(locataire: Locataire, vehicule: Vehicule, dateDebut: Date, dateFin: Date, locationId: number){
    this.locationmodif = (this.getLocationById(Number(locationId)));
    this.locationmodif.setDateDebut(dateDebut);
    this.locationmodif.setDateFin((dateFin));
    this.locationmodif.setLocataire(locataire);
    this.locationmodif.setVehicule(vehicule);
  }
 

  getAllLocatairesContrat(){
    return this.locataireService.getAllLocataires;
    
  }
  getAllVehciulesContrat(){
    return this.vehiculeService.getAllVehicules();
    
  }
}
