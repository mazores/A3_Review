import Team from './modules/DataObject.js';

//this is an IIFE -> Immediately Invoked Function Expression
//this is the JavaScript Module Pattern
(() => {
    console.log('fired!');

    let bioData = document.querySelector('.bio-wrapper').children; 

    
    //bioData[0].image

    // bioData[1].textContent = Person["name"];
    // bioData[2].textContent = Person["role"];
    // bioData[3].textContent = Person["bio"];

    function parsePersonData() {
        //debugger;
        //this = the element you clicked on (button)
        let person = this.textContent;

        bioData[0].src = `images/${Team[person].avatar}`;
        bioData[1].textContent = Team[person].name;
        bioData[2].textContent = Team[person].role;
        bioData[3].textContent = Team[person].bio;
    }

    // loop through object and build some UI
    for (let person in Team) {
        console.log(person);
        
        // create a button for each team member
        let currentButton = document.createElement('button');

        // add the person's name to the button
        currentButton.textContent = person;
        // add an event handler to the button
        currentButton.addEventListener("click", parsePersonData);
        // put the button in the team section on index.html
        document.querySelector('.team').appendChild(currentButton);
    
        // bioData.nextElementSibling.appendChild(currentButton);
    }

})();   