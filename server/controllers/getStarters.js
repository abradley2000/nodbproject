const axios = require('axios');
module.exports = {
    getStarters: async (req, res) => {
        let startArr = [];
        
        /*const firstPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
        const secondPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
        const thirdPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
        startArr.push(firstPokemon.data, secondPokemon.data, thirdPokemon.data)
        res.status(200).send(startArr)*/
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 150)}`)
            .then(starter => {
                startArr.push(starter.data);
                axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 150)}`)
                    .then(starter => {
                        startArr.push(starter.data);
                        axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 150)}`)
                            .then(starter => {
                                startArr.push(starter.data)
                                axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 150)}`)
                                    .then(starter => {
                                        startArr.push(starter.data)
                                        axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 150)}`)
                                            .then(starter => {
                                                startArr.push(starter.data)
                                                res.status(200).send(startArr)
                                            })
                                    })
                            })
                    })
            })
            .catch(error => res.status(500).send(error))
    }
}