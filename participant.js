import React, { Component } from 'react';

// Composant Participant
class Participant extends Component {
  augmenterScore = () => {
    this.props.augmenterScore(this.props.index);
  };

  render() {
    const { nom, score } = this.props;
    return (
      <div className="participant">
        <span>{nom}</span>
        <span>Score : {score}</span>
        <button onClick={this.augmenterScore}>Augmenter le score</button>
      </div>
    );
  }
}

// Composant TableauScores
class TableauScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [
        { nom: 'Alice', score: 50 },
        { nom: 'Bob', score: 75 },
        { nom: 'Charlie', score: 60 }
      ],
      triCroissant: true
    };
  }

  // Fonction pour augmenter le score d'un participant
  augmenterScore = (index) => {
    this.setState((prevState) => {
      const participants = [...prevState.participants];
      participants[index].score += 10;
      return { participants };
    });
  };

  // Fonction pour trier les scores
  trierScores = () => {
    this.setState((prevState) => {
      const participants = [...prevState.participants];
      participants.sort((a, b) => {
        return prevState.triCroissant ? a.score - b.score : b.score - a.score;
      });
      return { participants, triCroissant: !prevState.triCroissant };
    });
  };

  render() {
    return (
      <div>
        <h2>Tableau des Scores</h2>
        
        {/* Bouton pour trier les scores */}
        <button onClick={this.trierScores}>
          Trier {this.state.triCroissant ? "Décroissant" : "Croissant"}
        </button>

        {/* Liste des participants */}
        <div className="liste-participants">
          {this.state.participants.map((participant, index) => (
            <Participant
              key={index}
              index={index}
              nom={participant.nom}
              score={participant.score}
              augmenterScore={this.augmenterScore}
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
    return (
      <div>
        <h1>Application de Tableau de Scores</h1>
        <TableauScores />
      </div>
    );
  }
}

export default App;