import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locataire } from 'src/app/model/locataire.model';
import { LocataireService } from 'src/app/services/locataire.service';

@Component({
  selector: 'app-single-locataire',
  templateUrl: './single-locataire.component.html',
  styleUrls: ['./single-locataire.component.scss']
})
export class SingleLocataireComponent implements OnInit {

  locataire !: Locataire;

  constructor(private locataireService : LocataireService,
    private route : ActivatedRoute) { }

 /*  */
/**
 * Nous obtenons le locataireId à partir des paramètres de route, puis nous utilisons le
 * locataireService pour obtenir le locataire avec cet identifiant
 */
  ngOnInit(): void {
    const locataireId = +this.route.snapshot.params['id'];    
    this.locataire = this.locataireService.getLocataireById(locataireId);
  }

/**
 * Il prend un id en paramètre, puis appelle la fonction delete du service locataireService, en passant
 * l'id en paramètre
 * @param {number} id - l'identifiant du locataire à supprimer
 */
  onSupprimer(id : number){
    this.locataireService.supprimer(id);
  }
  onModifier(id : number){
    this.locataireService.modifier(this.locataire,id);

  }

}
