function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)
    postData('/meaning', {txt:'El pajarito es bonito!  y tambien es hermoso pero no me gusta como canta', lang:'es'} );
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });
// debugger
    try {
      const newData = await response.json();
      console.log("POst Data",newData);
      return newData;
    } catch(error) {
      console.log("error",error)
    }
}

export { handleSubmit }
