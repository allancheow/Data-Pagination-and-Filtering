/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
    /**
     * Function used to dynamically create DOM element
     * with student data retrieved from data.js file
     *
     * @param {text} elementName type of element to create
     * @param {text} className class name to assign
     * @param {text} objectDetail student detail from object
     * @returns {text} returns DOM element
     */
   function newElement(elementName, className, objectDetail) {
      const element = document.createElement(elementName);
      element.className = className;
      element.innerHTML = objectDetail;
      if (elementName === `img`) {
         element.alt = `Profile Picture`;
         element.src = objectDetail;
         element.innerHTML = ``;
      }
      return element;
   }   

   /**
     * Function used to call newElement() function
     * and append to respective DIVs on the page
     *
     * @param {text} divName unique DIV named
     * @param {text} elementName type of element to create
     * @param {text} className class name to assign
     * @param {text} objectDetail student detail from object
     * @returns {text} returns appended DOM element
     */
   function appendToDIV(divName, elementName, className, objectDetail) {
      const element = newElement(elementName, className, objectDetail);
      divName.appendChild(element);
      return element;
   }

   let startIndex = (page * 9) - 9;
   let endIndex = (page * 9);
   
   let ul = document.querySelector(`.student-list`);
   ul.innerHTML = ``;
   
   for ( let i = 0; i < list.length; i++ ) {
      if ( i >= startIndex && i < endIndex ) {
         const obj = list[i];
         const fullName = `${obj.name.first} ${obj.name.last}`;
         const joinedDate = `Joined ${obj.registered.date}`;
         
         // Start of DOM creation
         const li = newElement(`li`, `student-item cf`, ``);
         ul.appendChild(li);

         const detailDIV = li.appendChild(newElement(`div`, `student-details`, ``));
         appendToDIV(detailDIV, `img`, `avatar`, obj.picture.large);
         appendToDIV(detailDIV, `h3`, ``, fullName);
         appendToDIV(detailDIV, `span`, `email`, obj.email);

         const joinDIV = li.appendChild(newElement(`div`, `joined-details`, ``));
         appendToDIV(joinDIV, `span`, `date`, joinedDate);
         // End of DOM creation

         /*
         I didn't read the instructions fully and created this monstrosity
         above. I've also created the codes to follow the instruction and
         commented it out. Both version works the same way.
         */
         // let studentItem = `
         // <li class="student-item cf">
         //    <div class="student-details">
         //    <img class="avatar" src="${obj.picture.large}" alt="Profile Picture">
         //    <h3>${obj.name.first} ${obj.name.last}</h3>
         //    <span class="email">${obj.email}</span>
         //    </div>
         //    <div class="joined-details">
         //    <span class="date">Joined ${obj.registered.date}</span>
         //    </div>
         // </li>`;
         // ul.insertAdjacentHTML(`beforeend`, studentItem);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {   
   // Calculates the number of pages to display
   let numOfPages = Math.ceil(list.length / 9)
 
   const linkList = document.querySelector(`.link-list`);
   linkList.innerHTML = ``;
 
   // Injects button into the UL with the class of .link-list
   for ( let i = 1; i <= numOfPages; i++ ) {
      let button = `
      <li>
         <button type="button">${i}</button>
      </li>
      `;
      linkList.insertAdjacentHTML(`beforeend`, button);
   }
 
   // Sets the first button with the active class
   let firstBtn = document.querySelector(`button`);
   firstBtn.className = `active`;

   // Uses mouse click to update button color and displayed student cards
   linkList.addEventListener(`click`, (e) => {
      if (e.target.tagName === `BUTTON`) {
         document.querySelector(`.active`).className = ``;
         e.target.className = `active`;
         showPage(list, e.target.textContent);
      }
   });
 }


// Call functions
showPage(data, 1);
addPagination(data);