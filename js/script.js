// Variables

const itemParent = document.querySelector('.student-list');
const listItems = itemParent.children;
const perPage = 10;

// ShowPage Function

const showPage = (list, page) => {
   const startIndex = (listItems * perPage) - perPage;
   const endIndex = listItems * perPage;
    for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
        list[i].style.color = 'block';
      } else {
         list[i].style.color = 'none'; 
      }
   };

};

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
         for (let i = 0; i < pageLinks.length; i++) {
            pageLinks[i].classList.remove('active');
         }
         e.target.className = 'active';
        
      });
   };


   showPage(list, pageToShow);
