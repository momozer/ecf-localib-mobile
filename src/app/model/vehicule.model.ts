export class Vehicule {
 
id!: number;
etat!: string;
immatriculation!: string;
marque!: string;
modele!: string;
prix!: number;
statut!: string;
type!: string;
photo!:string;


/* Un constructeur. */
constructor(id: number, etat: string, immatriculation: string, marque: string, modele: string, prix: number, statut: string, type: string, photo : string) {
    this.id = id;
    this.etat = etat;
    this.prix   = prix;
    this.immatriculation = immatriculation;
    this.marque = marque;
    this.modele = modele;
    this.statut = statut;
    this.type = type;
    this.photo = photo;
};

//Getter et setter:
getId(){
    return this.id;
}
setId(id: number){
    this.id = id;
}

getPrix(){
    return this.prix;
}
setPrix(prix:number){
    this.prix = prix;  
}

getImmatriculation(){
    return this.immatriculation;
}
setImmatriculation(immatriculation: string){
    this.immatriculation = immatriculation;
}

getEtat(){
    return this.etat;
}
setEtat(etat: string){
    this.etat = etat;
}

getMarque(){
    return this.marque;
}
setMarque(marque: string){
    this.marque = marque;
}

getModele(){
    return this.modele;
}
setModele(modele: string){
    this.modele = modele;
}

getStatut(){
    return this.statut;
}
setStatut(statut: string){
    this.statut = statut;
}

getType(){
    return this.type;
}
setType(type: string){
    this.type = type;
}


}