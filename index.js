const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Allow all cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// -------------------------------------------- ENDPOINTS --------------------------------------------

/****************************************
 * Business
****************************************/

app.get('/players', async (req, res) => {
  try{
    
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
})


app.get('/errortry', async (req, res) => {
  try{
    alert(variable_no_existente); //Con esta variable hacemos que exista un error
    res.status(200).send({"Mensaje": "No hay un error en el Try"});
    }catch(e){
      res.status(500).send({'Error': 'Hay un error en el Try'})
    }
})

app.put('/pedrito', async (req, res) => {
  try{
    //alert(variable_no_existente); Comentando esta variable hacemos que no exista ningun error
    res.status(200).send({"Mensaje": "Todo correcto"});
    }catch(e){
      res.status(500).send({'Error': 'No correcto'})
    }
})


app.post('/marcelito', async (req, res) => {
  try{
    res.status(200).send({
      "recibi": req.body
    })
  }catch(e){
    res.status(500).send({'error': 'Internal server error'})
  }
})  

app.get('/boom', async (req, res) => {
  res.status(500).json({ message: "My bad" })
})

app.get('/players/salary', async (req, res) => {
  res.status(403).send({
    'error': 'Cannot access this information'
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});