/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section'); 
const navArray = document.getElementById('navbar__list'); 






/**
 * End Global Variables
 * Start Helper Functions
 * 
*/









function listItems(){
    for( let i=0; i< sections.length; i++){

      const section = sections[i]

      sectionName = section.getAttribute('data-nav');
      sectionLink = section.getAttribute('id');

      listItem = document.createElement('li');

      listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'> ${sectionName}</a>`;

      navArray.appendChild(listItem);



    }
  }



function youActiveClass(){
  for (const section of sections ){
      const containers = section.getBoundingClientRect();
      if (containers.top <= 150 && containers.bottom >= 150){
          section.classList.add('your-active-class');
      } else {
          section.classList.remove('your-active-class');
      }
  }
}





document.addEventListener("scroll", function() {
  youActiveClass();
});


listItems()

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/





// build the nav








// Add class 'active' to section when near top of viewport




//Calling the function we wrote




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


