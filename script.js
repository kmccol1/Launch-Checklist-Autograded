// Write your JavaScript code here!
//const myFunctions = require('./scriptHelper.js');
// import {formSubmission} from '/scriptHelper.js';
// import {myFetch} from '/scriptHelper.js';
// import {pickPlanet} from '/scriptHelper.js';
// import {addDestinationInfo} from '/scriptHelper.js';

window.addEventListener("load", function() {
    //event.preventDefault();
    console.log("Load");
    let myForm = document.querySelector("form");
    // let myForm = document.querySelector("form");
    myForm.addEventListener("submit", function(event)
    {
        console.log("Submit");
        //event.preventDefault();
        let myList = document.getElementById("faultyItems");
        // let pilotName = document.querySelector("input[name=pilotName]");
        // let copilotName = document.querySelector("input[name=copilotName]");
        // let fuel = document.querySelector("input[name=fuelLevel]");
        // let cargo = document.querySelector("input[name=cargoMass]");

        const pilotInputField = document.getElementById("pilotName");
        const pilotName = pilotInputField.value;

        const copilotInputField = document.querySelector('input[name="copilotName"]');
        const copilotName = copilotInputField.value;

        const fuelInputField = document.querySelector('input[name="fuelLevel"]');
        const fuel = fuelInputField.value;

        const cargoInputField = document.querySelector('input[name="cargoMass"]');
        const cargo = cargoInputField.value;
        //event.preventDefault();
        formSubmission(document, myList, pilotName, copilotName, fuel, cargo);
        event.preventDefault();
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let aPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, aPlanet.name, aPlanet.diameter, aPlanet.star, aPlanet.distance, aPlanet.moons, aPlanet.image);
    })
    
 });
