import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  /**
   * Il navigue vers la page d'accueil
   */
  onAccueil(){
    this.router.navigateByUrl("");
  }
  /**
   * Il navigue vers la page des locataires.
   */
  onLocataires(){
    this.router.navigateByUrl("locataires");
  }
  /**
   * Il navigue vers la page des véhicules.
   */
  onVehicules(){
    this.router.navigateByUrl("vehicules");
  }
/**
 * Il accède à la page des locations.
 */
  onLocations(){
    this.router.navigateByUrl("locations");
  }

}
