import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet, index) => {
          return (
            <Pet 
            pet={pet}
            key={index}
            isAdopted={this.props.adoptedPets.includes(pet.id)}
            onAdoptPet={this.props.onAdoptPet}
          />
          )
        })}
      </div>
    );
  }
}

export default PetBrowser;