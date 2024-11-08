import React, { Component } from 'react';

// Composant Produit
class Produit extends Component {
  render() {
    const { nom, prix, categorie } = this.props;
    return (
      <div className="produit">
        <h3>{nom}</h3>
        <p>Prix : {prix} €</p>
        <p>Catégorie : {categorie}</p>
      </div>
    );
  }
}

// Composant ListeProduits
class ListeProduits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorieFiltre: 'Toutes',
      triParPrix: 'ascendant'
    };
  }

  // Gestion du changement de filtre par catégorie
  gererChangementCategorie = (event) => {
    this.setState({ categorieFiltre: event.target.value });
  };

  // Gestion du changement de tri par prix
  gererChangementTri = (event) => {
    this.setState({ triParPrix: event.target.value });
  };

  filtrerEtTrierProduits = () => {
    const { produits } = this.props;
    const { categorieFiltre, triParPrix } = this.state;

    // Filtrage par catégorie
    let produitsFiltres = produits;
    if (categorieFiltre !== 'Toutes') {
      produitsFiltres = produitsFiltres.filter(produit => produit.categorie === categorieFiltre);
    }

    // Tri par prix
    produitsFiltres.sort((a, b) => {
      return triParPrix === 'ascendant' ? a.prix - b.prix : b.prix - a.prix;
    });

    return produitsFiltres;
  };

  render() {
    const produitsFiltresEtTries = this.filtrerEtTrierProduits();

    return (
      <div>
        <h2>Catalogue de Produits</h2>
        
        {/* Menu de filtre par catégorie */}
        <label>Filtrer par catégorie : </label>
        <select onChange={this.gererChangementCategorie} value={this.state.categorieFiltre}>
          <option value="Toutes">Toutes</option>
          <option value="Électronique">Électronique</option>
          <option value="Vêtements">Vêtements</option>
          <option value="Alimentation">Alimentation</option>
        </select>

        {/* Menu de tri par prix */}
        <label>Tri par prix : </label>
        <select onChange={this.gererChangementTri} value={this.state.triParPrix}>
          <option value="ascendant">Ascendant</option>
          <option value="descendant">Descendant</option>
        </select>

        {/* Liste des produits */}
        <div className="liste-produits">
          {produitsFiltresEtTries.map((produit, index) => (
            <Produit
              key={index}
              nom={produit.nom}
              prix={produit.prix}
              categorie={produit.categorie}
            />
          ))}
        </div>
      </div>
    );
  }
}

// Composant principal App
class App extends Component {
  render() {
    const produits = [
      { nom: 'Téléphone', prix: 300, categorie: 'Électronique' },
      { nom: 'Ordinateur', prix: 1200, categorie: 'Électronique' },
      { nom: 'Jeans', prix: 40, categorie: 'Vêtements' },
      { nom: 'Pomme', prix: 2, categorie: 'Alimentation' },
      { nom: 'T-shirt', prix: 15, categorie: 'Vêtements' },
    ];

    return (
      <div>
        <h1>Application de Catalogue de Produits</h1>
        <ListeProduits produits={produits} />
      </div>
    );
  }
}

export default App;