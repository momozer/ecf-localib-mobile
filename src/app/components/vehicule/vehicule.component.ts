import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/model/vehicule.model';
import { VehiculeListComponent } from 'src/app/pages/vehiculePage/vehicule-list/vehicule-list.component';
import { VehiculeService } from 'src/app/services/vehicule.service';


@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  @Input() vehicule !: Vehicule

  constructor(private vehiculeService : VehiculeService,
    private router : Router, private vehiculeList : VehiculeListComponent) { }
/**
 * Il navigue vers la page de détail du véhicule actuel
 */

 

    onSupprimer(){
      this.vehiculeService.supprimer(this.vehicule.id);
    }
    louer(){
      this.router.navigateByUrl(`location/`)

    }

  ngOnInit(): void {
  }
  modifierVehicule(){
    this.vehiculeList.modifierVehicule(this.vehicule.id)
  }

}
