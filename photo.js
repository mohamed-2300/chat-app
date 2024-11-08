import React, { Component } from 'react';

// Composant Photo
class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estSurvole: false
    };
  }

  gererMouseEnter = () => {
    this.setState({ estSurvole: true });
  };

  gererMouseLeave = () => {
    this.setState({ estSurvole: false });
  };

  render() {
    const { urlImage, titre, description } = this.props;
    const { estSurvole } = this.state;
    
    const stylePhoto = {
      boxShadow: estSurvole ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none',
      transform: estSurvole ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.3s, box-shadow 0.3s'
    };

    return (
      <figure 
        onMouseEnter={this.gererMouseEnter} 
        onMouseLeave={this.gererMouseLeave} 
        style={stylePhoto}
      >
        <img src={urlImage} alt={titre} />
        <figcaption>
          <h3>{titre}</h3>
          <p>{description}</p>
        </figcaption>
      </figure>
    );
  }
}

// Composant Galerie
class Galerie extends Component {
  render() {
    const photos = [
      { urlImage: 'https://example.com/image1.jpg', titre: 'Photo 1', description: 'Description 1' },
      { urlImage: 'https://example.com/image2.jpg', titre: 'Photo 2', description: 'Description 2' },
      { urlImage: 'https://example.com/image3.jpg', titre: 'Photo 3', description: 'Description 3' }
    ];

    return (
      <div className="galerie">
        {photos.map((photo, index) => (
          <Photo 
            key={index}
            urlImage={photo.urlImage}
            titre={photo.titre}
            description={photo.description}
          />
        ))}
      </div>
    );
  }
}

// Composant principal App
class App extends Component {
  render() {
    return (
      <div>
        <h1>Application de Galerie de Photos</h1>
        <Galerie />
      </div>
    );
  }
}

export default App;