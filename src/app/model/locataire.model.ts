export class Locataire {
    id !: number;
    prenom !: string;
    nom !: string;
    dateNaissance !: string;
    mail !: string;
    tel !: string;
/**
 * La fonction constructeur est une fonction qui est appelée lorsqu'une nouvelle instance de la classe
 * est créée.
 * @param {number} id - number, prenom : string, nom : string, dateNaissance : string, mail : string,
 * tel : string
 * @param {string} prenom - chaîne, nom : chaîne, dateNaissance : chaîne, mail : chaîne, tél : chaîne
 * @param {string} nom - string, prenom : string, dateNaissance : string, mail : string, tel : string
 * @param {string} dateNaissance - chaîne de caractères
 * @param {string} mail - chaîne, tél : chaîne
 * @param {string} tel - chaîne de caractères
 */

    constructor(id: number, prenom: string, nom: string, dateNaissance: string, mail: string, tel: string) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.dateNaissance = dateNaissance;
        this.mail = mail;
        this.tel = tel
    }

    //Getter et Setter:
    getId() {
        return this.id;
      }
    
      setId(id:number){
        this.id = id;
      }
    
      getprenom() {
        return this.prenom;
      }
    
      setPrenom(prenom: string){
        this.prenom = prenom;
      }
    
      getNom() {
        return this.nom;
      }
    
      setNom(nom: string){
        this.nom = nom;
      }
    
      getMail() {
        return this.mail;
      }
    
      setMail(mail: string){
        this.mail = mail;
      }

      getDateNaissance(){
        return this.dateNaissance;
      }
      setDateNaissance(dateNaissance: string){
        this.dateNaissance = dateNaissance;
      }
}