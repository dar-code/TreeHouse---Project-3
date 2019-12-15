/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const listItems = document.querySelector('.student-list');
const perPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage;
   const endIndex = page * perPage;
    for (let i = 0; i < list.length; i++) {
      if (list[i] >= startIndex && list[i] <= endIndex) {
        list[i].style.color = "";
      } else {
         list[i].style.color = "none"; 
      }
   }

};
showPage(listItems, 1);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   
   //Variable pagesCount will included the rounded number of needed pages. I've used Math.ceil to round the number up to the next highest whole number (if we have 54 students, we should have 6 pages instead of 5). 

   const pagesCount = Math.ceil(list.length / perPage);
   
   //Created a div element within a variable called 'div', stored it in the .page, and added a class 'pagination' to it.

   const div = document.createElement('div');
   const pageElement = document.querySelector('.page');
   pageElement.appendChild(div);
   div.className = 'pagination';

   //Appended ul to the 'pagination' class div.

   const ul = document.createElement('ul');
   div.appendChild(ul);

   for (let i = 0; i < pageElement.length; i++) {
      const ul = div.getElementsByTagName('ul')[0];
      const a = createElement('a');
      const li = createElement('li');

      li.appendChild(a);
      ul.appendChild(li);

      a.href = '#';
      a.textContent = i + 1;
   }

      a.addEventListener('click', (e) => {
         let pageToShow = parseInt(e.target.textContent);
         const pageLinks = document.querySelectorAll('a');
         for (let i = 0; i < pageLinks.length) {
            pageLinks[i].classList.remove('active');
         }
         e.target.className = 'active';
         showPage(list, pageToShow);
      });
   };



// Remember to delete the comments that came with this file, and replace them with your own code comments.