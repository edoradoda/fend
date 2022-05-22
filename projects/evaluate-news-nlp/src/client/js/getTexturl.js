

// function getTexturl(url) {
//     fetch('https://fiddle.jshell.net/robots.txt',{mode:'no-cors'})
//     .then((response) => response.text().then(saveInfo));
// }

// function saveInfo( retrievedText ) { console.log("retrievedText",retrievedText) }
var url = 'https://fiddle.jshell.net/robots.txt';
var storedText;

async function getTexturl(url) {
    fetch(url,{
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    })  //,{mode:'no-cors'}
        .then(function(response) {
            response.text().then(function(text) {
            storedText = text;
            console.log("text",text)
            done();
        });
    });

   
}

function done() {
      console.log("estores",storedText)
}

export { getTexturl }


