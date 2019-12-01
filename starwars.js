var App = function(){
    console.log('inside App');
 }
 App.prototype.getallPeople = async  function(){

 const response = await fetch('https://swapi.co/api/people/')
 let personas = await response.json()
 return personas.results.filter(j => j.height >= 120).map(k => k.name)
};
      
 const app = new App();
 console.log('names')
 app.getallPeople().then(data => console.log(data))