const express = require('express');
const getStarters = require('./controllers/getStarters');
const starterCtrl = require('./controllers/starterCtrl');

const app = express();
const port = 4000;

app.use(express.json())

app.get('/api/starter-pokemon', getStarters.getStarters)
app.get('/api/chosen-starter', starterCtrl.getStarter)
app.post('/api/choose-starter', starterCtrl.chooseStarter)
app.put('/api/rename-starter/:name', starterCtrl.renameStarter)
app.delete('/api/delete-starter', starterCtrl.deleteStarter)

app.listen(port, () => console.log(`Running on port ${port}.`))