import React, { Component } from 'react';
import Sidebar from './Sidebar';
import animals from '../data/data';
import Button from './Button';
import './App.css';

class Animals extends Component {
  constructor() {
    super();
    this.state = {
      animals,
    };
  }

  onDelete(id) {
    const updatedAnimals = this.state.animals.filter(
      (item) => item.animalId !== id
    );
    this.setState({ animals: updatedAnimals });
    console.log(`Delete item with id: `, id);
  }

  render() {
    return (
      <>
        <div className="animals">
          <div className="ui three column equal height grid">
            {this.state.animals
              // .filter(searchIt(this.state.searchTerm))
              .map((animal, idx) => {
                return (
                  <div className="column">
                    <div className="ui card" key={animal.objectId}>
                      <div className="image">
                        <img src={animal.image} alt="..." />
                      </div>
                      <div className="content">
                        <div className="header">{animal.name}</div>
                        <div className="meta">
                          <span className="category">{animal.type}</span>
                        </div>
                        <div className="description">{animal.description}</div>
                      </div>
                      <div className="extra content">
                        <Button className="ui blue button">Like</Button>
                        <Button className="ui red button">Dislike</Button>
                        <Button
                          className="ui button"
                          onClick={() => {
                            return this.onDelete(animal.animalId);
                          }}
                        >
                          Discard
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <Sidebar />
      </>
    );
  }
}

export default Animals;
