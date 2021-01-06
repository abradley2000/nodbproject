let chosenStarter = {};
module.exports = {
    chooseStarter: (req, res) => {
        const {pokemon} = req.body
        chosenStarter = pokemon
        res.status(200).send(chosenStarter)
    },
    getStarter: (req, res) => {
        res.status(200).send(chosenStarter)
    },
    renameStarter: (req, res) => {
        const {newName} = req.params
        res.status(200).send(newName)
    },
    deleteStarter: (req, res) => {
        chosenStarter = {}
        res.status(200).send(chosenStarter)
    }
};