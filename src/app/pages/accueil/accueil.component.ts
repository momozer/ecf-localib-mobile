import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 /**
  * Il navigue vers la page des locataires.
  */
  onLocataires(){
    this.router.navigateByUrl("locataires");
  }

}
