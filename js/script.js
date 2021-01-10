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
//console.log(data);
function showPage(list, page) {
   
   // create two variables which will represent the index for the first and last student on the page
   //console.log(list);
   //console.log(page);
   let startIndex = (page * 9) - 9;
   let endIndex = (page * 9);
   // select the element with a class of `student-list` and assign it to a variable
   let ul = document.querySelector(`.student-list`);
 
   // set the innerHTML property of the variable you just created to an empty string
   ul.innerHTML =``;
 
   // loop over the length of the `list` parameter
     // inside the loop create a conditional to display the proper students
       // inside the conditional:
         // create the elements needed to display the student information
         // insert the above elements
   for ( let i = 0; i < list.length; i++ ) {
      if (list[i]) {
         const obj = list[i];
         
         const li = document.createElement(`li`);
         ul.appendChild(li);

         const detailDIV = document.createElement(`div`);
         detailDIV.className = `student-item cf`;
         li.appendChild(detailDIV);

         const img = document.createElement(`img`);
         img.className = `avatar`;
         img.alt = `Profile Picture`;
         img.src = obj.picture.large;
         detailDIV.appendChild(img);

         const h3 = document.createElement(`h3`);
         h3.innerHTML = `${obj.name.first} ${obj.name.last}`;
         detailDIV.appendChild(h3);

         const detailSpan = document.createElement(`span`);
         detailSpan.className = `email`;
         detailSpan.innerHTML = `${obj.email}`;
         detailDIV.appendChild(detailSpan);

         const joinDIV = document.createElement(`div`);
         joinDIV.className = `joined-details`;
         li.appendChild(joinDIV);

         const joinSpan = document.createElement(`span`);
         joinSpan.className = `date`;
         joinSpan.innerHTML = `Joined ${obj.registered.date}`;
         joinDIV.appendChild(joinSpan);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);