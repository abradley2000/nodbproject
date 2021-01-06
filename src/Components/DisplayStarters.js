import React, {Component} from 'react';

class DisplayStarters extends Component {
    handleChoose = () => {
        const {starter} = this.props
        let starterPokemon = {
            name: starter.name,
            image: starter.sprites.front_default
        }
        this.props.chooseStarter(starterPokemon)
        this.props.clearChoices()
    }
    render() {
        return (
            <div onClick={this.handleChoose}>
                <p>{this.props.starter.name}</p>
                <img src={this.props.starter.sprites.front_default}/>
            </div>
        )
    }
}

export default DisplayStarters;