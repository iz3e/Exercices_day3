var App = function(){
    console.log('inside App');
 }
 App.prototype.getallPeople = async  function(){

 const response = await fetch('https://swapi.co/api/people/')
 let personas = await response.json()
 console.log(personas.results)
 return personas.results.map(j => j.height >= 120)
};
      
 const app = new App();
 console.log('names')
 console.log(app.getallPeople());