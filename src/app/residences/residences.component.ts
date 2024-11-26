import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchItem: string = "";
  listFavoris: Residence[] = [];

  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/images/R4.jpg", status: "En Construction" }
  ];

  // Fonction pour filtrer les résidences en fonction de l'adresse
  filteredResidences(): Residence[] {
    if (!this.searchItem) {
      return this.listResidences;
    }
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }

  // Fonction pour afficher la localisation
  ShowLocation(address: string): void {
    if (address === 'inconnu') {
      alert('L\'adresse de cette résidence est inconnue');
    } else {
      alert('Adresse : ' + address);
    }
  }

  // Fonction pour ajouter une résidence aux favoris
  addToFavorites(residence: Residence): void {
    if (!this.listFavoris.some(fav => fav.id === residence.id)) {
      this.listFavoris.push(residence);
      alert(`${residence.name} a été ajouté aux favoris.`);
    } else {
      alert(`${residence.name} est déjà dans vos favoris.`);
    }
  }
}
