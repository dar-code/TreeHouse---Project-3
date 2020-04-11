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

//Hide the “Select Theme” `option` element in the “Design” menu.

const selectDesign = document.getElementById('design').options[0];
selectDesign.style.display = 'none';

// Update the “Color” field to read “Please select a T-shirt theme”.

const selectColor = document.getElementById('color');

const optionPlease = document.createElement('option');

optionPlease.value = "please";
optionPlease.text = "Please select a T-shirt theme";

selectColor.add(optionPlease, selectColor.options[0]);
optionPlease.innerHTML = 'Please select a T-shirt theme';

// Hide the colors in the “Color” drop down menu.

// NOTE: Be sure to check out the helpful links in the second section of this Study Guide if you’re unsure of how to accomplish these steps.


// Then, when one of the two themes is selected, only the appropriate colors should show in the
// “Color” drop down menu, and the “Color” field should update to the first available color. You’ll
// use a `change` event listener on the “Design” menu `select` element to listen for changes. And
// inside the event listener, you’ll use a conditional to determine what to hide, show and update.
// ● If “js puns” is selected, hide the three “heart js” option elements in the “Color” drop
// down menu, show the three “js puns” option elements, and update the “Color” field to
// the first available color.
// ● If “heart js” is selected, hide the three “js puns” option elements in the “Color” drop
// down menu, show the three “heart js” option elements, and update the “Color” field to
// the first available color.