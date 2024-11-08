// userprophile

import React, { Component } from 'react';

// Composant ProfilUtilisateur
class ProfilUtilisateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      couleurTheme: '#3498db'  // Couleur de thème par défaut
    };
  }

  // Méthode pour gérer les changements dans les champs du formulaire
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { nom, email, couleurTheme } = this.state;
    
    const styleProfil = {
      backgroundColor: couleurTheme,
      padding: '20px',
      borderRadius: '8px',
      color: '#fff',
      maxWidth: '300px',
      textAlign: 'center'
    };

    return (
      <div style={styleProfil}>
        <h2>Profil Utilisateur</h2>
        <p><strong>Nom :</strong> {nom}</p>
        <p><strong>Email :</strong> {email}</p>
        
        <form>
          <div>
            <label>
              Nom :
              <input
                type="text"
                name="nom"
                value={nom}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email :
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Couleur de thème :
              <input
                type="color"
                name="couleurTheme"
                value={couleurTheme}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

// Composant principal App
class App extends Component {
  render() {
    return (
      <div>
        <h1>Application de Profil Utilisateur</h1>
        <ProfilUtilisateur />
      </div>
    );
  }
}

export default App;

