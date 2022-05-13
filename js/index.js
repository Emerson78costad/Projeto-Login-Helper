const persons = document.getElementByid('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();
function fillCounters(){
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets')
    ])
    .then(data=>{
        persons.style.fontsize='5em';
        starships.style.fontsize='5em';
        planets.style.fontsize='5em';

        persons.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count

    })
    .catch(err => console.log('Erro:' ,err))
}
 function getData(param){
    return fetch('https://swapi.dev/api/${param}')
    .then(res => res.json())
 }