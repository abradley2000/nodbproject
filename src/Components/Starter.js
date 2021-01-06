import React, {Component} from 'react';
import axios from 'axios';
import DisplayStarters from './DisplayStarters';

class Starter extends Component {
    constructor(){
        super()
        this.state = {
            starters: [],
            starter: []
        }
        this.chooseStarter = this.chooseStarter.bind(this)
        this.clearChoices = this.clearChoices.bind(this)
    }
    componentDidMount(){
        this.getStarterPokemon();
        axios.get('api/chosen-starter').then(res => this.setState({starter: res.data}))
    }
    getStarterPokemon = () => {
        axios.get('/api/starter-pokemon')
            .then(res => this.setState({starters: res.data}))
            .catch(error => console.log(error))
    }
    chooseStarter(e) {
        axios.post('/api/choose-starter', {pokemon: e})
            .then(res => this.setState({starter: res.data}))
            .catch(error => console.log(error))
    }
    renameStarter = (newName) => {
        let name = this.state.starter
        axios.put(`/api/rename-starter/${newName}`)
            .then(res => {
                name.name = res;
                this.setState({starter: name})
            })
        
    }
    deleteStarter = () => {
        axios.delete('/api/delete-starter')
            .then(res => this.setState({starter: res.data}))
            .catch(error => console.log(error))
    }
    clearChoices() {
        this.setState({starters: []})
    }
    render(){
        let {starter} = this.state;
        let {starters} = this.state;
        let mappedStarters = starters.map((starter, i) => (
            <DisplayStarters
            key={i}
            starter={starter}
            chooseStarter={this.chooseStarter}
            clearChoices={this.clearChoices}
            />
        ));
        return(
            <div>
                <div>
                    <p>{starter.name}</p>
                    <img src={starter.image} onClick={this.deleteStarter}/>
                    <input onChange={e => this.renameStarter(e.target.value)}/>
                </div>
                <div className='starter'>
                    {mappedStarters}
                    <button onClick={this.getStarterPokemon}>Display new Pokémon</button>
                </div>
            </div>
        )
    }
}

export default Starter;