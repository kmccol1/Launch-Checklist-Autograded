//import 'cross-fetch/polyfill';
// Write your helper functions here!
require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // let myDiv = document.getElementById('missionTarget');
    const myDiv = document.querySelector('#missionTarget');
    myDiv.innerHTML =
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=${imageUrl}>`;
 }
 
function validateInput(testInput)
{
    let result;
    if(testInput === "")
    {
        result = 'Empty';
    }
    else if (isNaN(testInput) == true)
    {
        result = "Not a Number";
    }
    else
    {
        result = "Is a Number";
    }
    return result;
}
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
 {
     //validateInput(pilot)...etc....
     let result = true;
     if (validateInput(pilot) == 'Empty' || validateInput(copilot) == 'Empty' || validateInput(fuelLevel) == 'Not a Number' || validateInput(cargoLevel) == 'Not a Number')
     {
         alert("All fields are required!");
         event.preventDefault();
     }

    let myDiv = document.getElementById('faultyItems');
    // let listDiv = myDiv.querySelectorAll('li');
    // listDiv.forEach(function(item){if(item.id=='pilotStatus'){item.textContent=`${pilot}`;}});
    const pilotStatusElement = document.querySelector('ol #pilotStatus');
    pilotStatusElement.textContent = `${pilot} Ready`;

    const copilotStatusElement = document.querySelector('ol #copilotStatus');
    copilotStatusElement.textContent = `${copilot} Ready`;


    if ( (fuelLevel < 10000) || (cargoLevel > 10000))
    {
        myDiv.style.visibility = 'visible';
        document.querySelector("#launchStatus").textContent = "Shuttle not ready for launch";
        document.querySelector("#launchStatus").style.color = "red";
        const fuelStatusElement = document.querySelector('ol #fuelStatus');
        fuelLevel < 10000 ? fuelStatusElement.textContent = "Fuel level not high enough for launch" :fuelStatusElement.textContent = "Fuel level is high enough for launch";
        const cargoStatusElement = document.querySelector('ol #cargoStatus');
        cargoLevel > 10000 ? cargoStatusElement.textContent = "Cargo mass too high for launch" :cargoStatusElement.textContent = "Cargo mass is low enough for launch";
        event.preventDefault();
    }
    else
    {
        document.querySelector("#launchStatus").textContent = "Shuttle is ready for launch";
        document.querySelector("#launchStatus").style.color = "green";
    }

    event.preventDefault();
    return result;
 }
 //task 3 functions commented out below

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
         return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets)
 {
     let randIndex = Math.floor(Math.random()*planets.length);
     let randPlanet = planets[randIndex];
     return randPlanet;
 }

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
