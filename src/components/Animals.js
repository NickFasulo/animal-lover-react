import React, { Component } from 'react';
import './App.css';

let animals = [
  {
    image: '/images/bird1.jpg',
    type: 'Bird',
    name: 'Sue',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '1',
  },
  {
    image: '/images/bird2.jpg',
    type: 'Bird',
    name: 'Jowl',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '2',
  },
  {
    image: '/images/bird3.jpg',
    type: 'Bird',
    name: 'Bob',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '3',
  },
  {
    image: '/images/bird4.jpg',
    type: 'Bird',
    name: 'Cali',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '4',
  },
  {
    image: '/images/meerkat1.jpg',
    type: 'Meerkat',
    name: 'Howie',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '5',
  },
  {
    image: '/images/meerkat2.jpg',
    type: 'Meerkat',
    name: 'LuLu',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '6',
  },
  {
    image: '/images/meerkat3.jpg',
    type: 'Meerkat',
    name: 'Frank',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '7',
  },
  {
    image: '/images/meerkat4.jpg',
    type: 'Meerkat',
    name: 'Monie',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '8',
  },
  {
    image: '/images/tiger1.jpg',
    type: 'Tiger',
    name: 'Kat',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '9',
  },
  {
    image: '/images/tiger2.jpg',
    type: 'Tiger',
    name: 'Greg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '10',
  },
  {
    image: '/images/tiger3.jpg',
    type: 'Tiger',
    name: 'Hank',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '11',
  },
  {
    image: '/images/tiger4.jpg',
    type: 'Tiger',
    name: 'Spank',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    animalId: '12',
  },
];

class Animals extends Component {
  constructor() {
    super();
    this.state = {
      animals,
    };
  }

  render() {
    return (
      <div className='main'>
        {this.state.animals
          // .filter(searchIt(this.state.searchTerm))
          .map((animal, idx) => {
            return (
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
                  <button className="ui blue button">Like</button>
                  <button className="ui red button">Dislike</button>
                  <button className="ui button">Discard</button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Animals;
