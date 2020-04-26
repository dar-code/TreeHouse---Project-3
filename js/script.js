//Selected the 'name' ID within the HTML file and added the focus method to it.

const nameFocus = document.getElementById('name').focus();

const titleList = document.getElementById('title');

//Selected the newly input element with id="other-role" element nad putting it in a variable called "otherElement"

const otherRole = document.getElementById('other-title');

//Hid the "other-role" text box

otherRole.style.display = 'none'

//Added an event listener which will diplay the "other-role" textbox only if the "titleList" variable value is "other"

titleList.addEventListener('change', (e)=>{
    if(e.target.value === "other"){
        otherRole.style.display = ''
    } else {
        otherRole.style.display = 'none'
        }
});

//Hid the “Select Theme” `option` element in the “Design” menu.

const selectDesigns = document.getElementById('design')
const selectDesign = document.getElementById('design').options[0];
selectDesign.style.display = 'none';

// Updated the “Color” field to read “Please select a T-shirt theme”.

const selectColor = document.getElementById('color');

const optionPlease = document.createElement('option');

selectColor.value = "Please select a T-shirt theme";

optionPlease.text = "Please select a T-shirt theme";

selectColor.add(optionPlease, selectColor.options[0]);

const colorOptions = selectColor.children;

//Hid all fo the Color options by looping through them and displaying "none"

for (let i = 1; i < colorOptions.length; i++){
    colorOptions[i].style.display = 'none';
  };

//Added the change event listener that will display indexes 1, 2, and 3 for "js puns" and 4, 5, and 6 for "heart js". First color option will be displayed depending on the design theme selected.

selectDesigns.addEventListener('change', (e)=>{
    if(e.target.value === "js puns"){

        colorOptions[1].selected = true;
        colorOptions[0].style.display = 'none';
        colorOptions[1].style.display = '';
        colorOptions[2].style.display = '';
        colorOptions[3].style.display = '';
        colorOptions[4].style.display = 'none';
        colorOptions[5].style.display = 'none';
        colorOptions[6].style.display = 'none';

    } else if (e.target.value === "heart js") {

        colorOptions[4].selected = true;
        colorOptions[0].style.display = 'none';
        colorOptions[1].style.display = 'none';
        colorOptions[2].style.display = 'none';
        colorOptions[3].style.display = 'none';
        colorOptions[4].style.display = '';
        colorOptions[5].style.display = '';
        colorOptions[6].style.display = '';
    }
});

//Created the new element and appended it to the fieldset with the "activities" class, which is stored in the "regosterNow" variable

const totalCost = document.createElement('div');
const activitiesVar = document.querySelector('.activities');
activitiesVar.appendChild(totalCost);

//Created the variable "fullCost" which will keep the cost. Set it as let variable because the full cost will change

let fullCost = 0;

//Created a variable checkboxes(capturing input elements within the "activities" fieldset)

const checkboxes = document.querySelectorAll('.activities input');

//Created a change event listener which will listen for the check box box activity

activitiesVar.addEventListener('change', (e)=>{

//created variables:
// - itemCost(capturing the data-type attribute within the checkbox input elements within the "activities" fieldset)
// - selectedTime(capturing the data-day-and-time attribute within the checkbox input elements within the "activities" fieldset)  

    const itemCost = parseInt(e.target.getAttribute('data-cost'));
    const selectedTime = e.target.getAttribute('data-day-and-time');

//Created an if statement which calculates the total cost by increasing or decreasing the "fullCost" variable value, depedning on which checkbox is checked or unchecked

    if (e.target.checked) {

        fullCost += itemCost;
        totalCost.innerHTML = 'Total: $' + fullCost

    } else {

        fullCost -= itemCost;
        totalCost.innerHTML = 'Total: $' + fullCost
    };

//If the "fullCost" variable equals "0", hide the "totalCost"
    
    if(fullCost === 0){

        totalCost.style.display = 'none';
    } else {

        totalCost.style.display = 'block';
    }
    
//This function loops over all checkboxes, while dateTime variable captures the day and time of the selected checkbox

    for (let i = 0; i < checkboxes.length; i++) {

        const dateTime = checkboxes[i].getAttribute('data-day-and-time');

//Below if statement diables a checkbox if specific day and time are not available or if the checkbox is already selected 

        if (dateTime === selectedTime && e.target !== checkboxes[i]) {

         if (e.target.checked) {
          checkboxes[i].disabled = true;
        } else {
          checkboxes[i].disabled = false;
        }
    }
    }

});

//Hid the "Select Payment Method" `option` so it doesn’t show up in the drop down menu.

const selectMethod = document.getElementById('payment');
selectMethod[0].style.display = 'none';

//Captured "Credit Card", "Bitcoin", and "Paypal" section in respecitve variables

const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

//Created a "change" event listener which displays only the selectMethod drop down menu selection

selectMethod.addEventListener('change', (e)=>{

    if (e.target.value === 'none') {

        creditCard.style.display = '';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';

    } else if (e.target.value === 'credit card') {

        creditCard.style.display = '';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';

    } else if (e.target.value === 'paypal') {

        creditCard.style.display = 'none';
        paypal.style.display = '';
        bitcoin.style.display = 'none';
    }
    
     else if (e.target.value === 'bitcoin') {

        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = '';

    }
    
});

//Created variables for all input fields

const name = document.getElementById('name');

const email = document.getElementById('mail');

const ccNumber = document.getElementById('cc-num');

const zip = document.getElementById('zip');

const cvv = document.getElementById('cvv');

//Created validation functions. For the name validation I made sure that last names which have an apostrophe (such as O'Neil) or a hyphen (Smith-Williams) are validated as well. 

function nameValidation(name) {

    return /^([a-zA-Z]{1,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}?)/.test(name);
}

function emailValidation(email) {

    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function ccValidation(ccNumber) {

    return /^[0-9]{13,16}$/.test(ccNumber);
}

function zipValidation(zip) {

    return /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/.test(zip);
}

function cvvValidation(cvv) {

    return /^[0-9]{3,4}$/.test(cvv);
}

//Used the closure function method to validate the NAME. I was dissapointed that I could not find a way to validate all 5 input fields using only one closure function.
//Added messages and formatting for each show, element, and blank.

function nameValidator(show, element, blank){
    if(show){

        element.nextElementSibling.style.borderColor = '#E52521';
        element.textContent = 'Please provide a valid First and Last Name';
        element.style.color = '#E52521';

    } else {

        element.nextElementSibling.style.borderColor = 'rgb(76,187,23)';
        element.textContent = 'Thank you for entering your name!';
        element.style.color = 'rgb(76,187,23)';

    }
    if(blank){

        element.style.color = 'inherit';
        element.textContent = 'Please provide a valid First and Last Name here';
    }
}
function createListenerName(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== '' && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == '';
      nameValidator(showTip, tooltip, blank);
    };
}

//Used the closure function method to validate the EMAIL.
//Added messages and formatting for each show, element, and blank.

function emailValidator(show, element, blank){
    if(show){

        element.nextElementSibling.style.borderColor = '#E52521';
        element.textContent = 'Please provide a valid email address';
        element.style.color = '#E52521';

    } else {

        element.nextElementSibling.style.borderColor = 'rgb(76,187,23)';
        element.textContent = 'Your email is valid!';
        element.style.color = 'rgb(76,187,23)';

    }
    if(blank){

        element.style.color = 'inherit';
        element.textContent = 'Please enter a valid email address here';
    }
} 
function createListenerEmail(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== '' && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == '';
      emailValidator(showTip, tooltip, blank);
    };
}

//Used the closure function method to validate the CARD NUMBER.
//Added messages and formatting for each show, element, and blank.

function ccValidator(show, element, blank){
    if(show){

        element.nextElementSibling.style.borderColor = '#E52521';
        element.textContent = 'Please enter a credit card number';
        element.style.fontColor = '#E52521';
        element.style.color = '#E52521';

    } else {

        element.nextElementSibling.style.borderColor = 'rgb(111, 157, 220)';
        element.textContent = 'Your credit card number is valid!';
        element.style.borderColor = '#43B047';
        element.style.color = '#43B047';

    }
    if(blank){

        element.textContent = 'Please enter a number that is between 13 and 16 digits long';
        element.style.color = '#049CD8';
    }
} 
function createListenerccNumber(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== '' && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == '';
      ccValidator(showTip, tooltip, blank);
    };
}

//Used the closure function method to validate the ZIP CODE.
//Added messages and formatting for each show, element, and blank.

function zipValidator(show, element, blank){
    if(show){

        element.nextElementSibling.style.borderColor = '#E52521';
        element.textContent = 'Please provide a valid zip code';
        element.style.fontColor = '#E52521';
        element.style.color = '#E52521';

    } else {

        element.nextElementSibling.style.borderColor = 'rgb(111, 157, 220)';
        element.textContent = 'Your zip code is valid!';
        element.style.borderColor = '#43B047';
        element.style.color = '#43B047';

    }
    if(blank){

        element.textContent = 'Please enter a 5 digit zip code';
        element.style.color = '#049CD8';
    }
} 
function createListenerZip(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== '' && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == '';
      zipValidator(showTip, tooltip, blank);
    };
}

//Used the closure function method to validate the CVV NUMBER.
//Added messages and formatting for each show, element, and blank.

function cvvValidator(show, element, blank){
    if(show){

        element.nextElementSibling.style.borderColor = '#E52521';
        element.textContent = 'Please provide a valid CVV';
        element.style.fontColor = '#E52521';
        element.style.color = '#E52521';

    } else {

        element.nextElementSibling.style.borderColor = 'rgb(111, 157, 220)';
        element.textContent = 'Your cvv number is valid!';
        element.style.borderColor = '#43B047';
        element.style.color = '#43B047';

    }
    if(blank){

        element.textContent = 'Please enter a valid 3 digit CVV number';
        element.style.color = '#049CD8';
    }
}       
function createListenercvv(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== '' && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == '';
      cvvValidator(showTip, tooltip, blank);
    };
}

//Created event listeners for the validators

name.addEventListener("input", createListenerName(nameValidation));
email.addEventListener("input", createListenerEmail(emailValidation));
ccNumber.addEventListener("input", createListenerccNumber(ccValidation));
zip.addEventListener('input', createListenerZip(zipValidation));
cvv.addEventListener('input', createListenercvv(cvvValidation));

//Added a span element to the checkbox section

const checkboxAlert = document.createElement('span');

//Created a function which captures boxes that are checked

function checkboxValidation() {

    for (let i=0; i < checkboxes.length; i++){
      if(checkboxes[i].checked){
        return true;
      }
    }
}

//Created a submit event listener for the register button. Used prevent default method to disable the register button until all text fields and the activity section are populated.

document.querySelector('form').addEventListener('submit', (e) => {

    if(!nameValidation(name.value)) {
       
        name.style.borderColor = '#E52521';
        name.previousElementSibling.textContent = 'A valid First and Last name is required';
        name.previousElementSibling.style.color = '#E52521';
        
        e.preventDefault();
    } 

    if(!emailValidation(email.value)) {
        
        email.style.borderColor = '#E52521';
        email.previousElementSibling.textContent = 'A vaild email address is required';
        email.previousElementSibling.style.color = '#E52521';
        
        e.preventDefault();
    }

    if(!checkboxValidation()) {
        
        const location = activitiesVar.firstElementChild;
        location.appendChild(checkboxAlert);

        checkboxAlert.innerHTML = ' (Please select at least 1 activity)';
        checkboxAlert.style.color = '#E52521';
        location.style.color = '#E52521';

        e.preventDefault();
    }

    if(!ccValidation(ccNumber.value) && selectMethod.value === 'credit card') {
        
        ccNumber.style.borderColor = '#E52521';
        ccNumber.previousElementSibling.textContent = 'A vaild credit card number is required';
        ccNumber.previousElementSibling.style.color = '#E52521';

        e.preventDefault();
    } 

    if(!zipValidation(zip.value) && selectMethod.value === 'credit card') {
        
        zip.style.borderColor = '#E52521';
        zip.previousElementSibling.textContent = 'A vaild zip code is required';
        zip.previousElementSibling.style.color = '#E52521';

        e.preventDefault();
    }

    if(!cvvValidation(cvv.value) && selectMethod.value === 'credit card') {
        
        cvv.style.borderColor = '#E52521';
        cvv.previousElementSibling.textContent = 'A vaild cvv number is required';
        cvv.previousElementSibling.style.color = '#E52521';

        e.preventDefault();
    }
});

