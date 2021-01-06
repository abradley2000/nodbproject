import React, {Component} from 'react';
import axios from 'axios';

class Enemy extends Component {
    constructor(){
        super()
        this.state = {
            enemies: []
        }
    }
    componentDidMount(){
        this.getStarterPokemon();
    }
    getStarterPokemon = () => {
        axios.get('/api/starter-pokemon')
            .then(res => this.setState({enemies: res.data}))
            .catch(error => console.log(error))
        let enemy = [...this.state.enemies].splice(1, 4)
        this.setState({enemies: enemy})
    }
    render(){
        return(
            <div>
                <button>Battle</button>
                {}
            </div>
        )
    }
}

export default Enemy;