// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
getCharacters();
// var dataName = ''
function getCharacters (){

  fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=fc273af0f86e9c39dc17cb69b19fa0c6&hash=706f0130c1217ad47bc6f5564ef70b00")
  .then(response => {
    return response.json()
  })
  .then(data => {
   charData(data.data);
    for(let i=0, len=charData.length; i<len; i++ ){
    }
  })
  }
  
      const collected = []
      var charData = (charts) =>{
        var characters = document.getElementById('characters');
        characters.setAttribute('id','removeChar')
        charts.results.map(results => { 
          const li = document.createElement("li")
          let colButton = document.createElement("button")
          colButton.setAttribute('id','removeButton')
          colButton.innerHTML = "Collect Character"
          colButton.addEventListener('click', function() {collected.push(results),{once:true},
            collect()}) 
          li.appendChild(colButton)
          li.appendChild(document.createTextNode(results.name))
          characters.appendChild(li)
          })
          };
  
          
          var collect = ()=> {
            const collection = document.getElementById('collected')
            removeButton.remove()
            // removeChar.remove()
            collection.innerHTML = null;
            
            collected.map(charts => {
              const li = document.createElement('li')
              li.append(document.createTextNode(charts.name))
              collection.append(li)
            })
          }
          // var removeButton = ()=> {
          // removeChar.remove()
          //  }
          
          
      
  
        
        
      
    

    