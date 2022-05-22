var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    console.log(`Your API key is ${process.env.API_KEY}`);
    res.send(mockAPIResponse)
})


app.post('/testPost', function (req, res) {
    res.send({ok:'OK'});
})


app.post('/meaning', getMeaning)


async function getMeaning(req, res) {
   const txt = req.body.txt
   const lang = req.body.lang
  try {
    const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${txt}&lang=${lang}`);
    // console.log(response.data);
    res.send(response.data)
  } catch (error) {
    console.error(error);
    res.send({result:'error'})
  }
}



// Post Route
app.post('/meaningxx', sendData);
function sendData (req, res) {
  projectData={
    key:process.env.API_KEY,
    txt:req.body.txt,
    lang:req.body.lang
  }

  const requestOptions = {
    method: 'POST',
    body: projectData,
    redirect: 'follow'
  };

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log("hola1",status, body))
  .catch(error => console.log('error hola2', error));


 


  res.send({result:'OK'})
};



