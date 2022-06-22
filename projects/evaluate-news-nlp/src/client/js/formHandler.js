async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let language = document.getElementById('lang').value
    console.log("dataSend",formText,language)
    if(Client.checkForText(formText)){
      let rsData = await postData('/meaning', {txt:formText, lang:language} );
      Client.showResult(rsData)
    }
    // getTexturl('url')
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
  // console.log("url",url)
    url='https://sentiment-analysis-100.herokuapp.com/meaning'
    const response = await fetch(url, {
    method: 'POST', 
    // credentials: 'same-origin',
    credentials: 'include',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
        
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });
// debugger
    try {
      const newData = await response.json();
      // console.log("POst Data",newData);
      return newData;
    } catch(error) {
      console.log("error",error)
    }
}

export { handleSubmit }
