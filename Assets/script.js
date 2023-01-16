// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.    

// This informs jQuery to wait until the page finishes rendering to execute any jQuery.
// Document ready shorthand. Same as $(document).ready(function)
$(document).ready(function() { 

  let day = dayjs();
// $('#currentDay').text(day.format('MMMM DD, YYYY, h:mm A'));
$('#currentDay').text(day.format('MMMM DD, YYYY, 12:00 A'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 'this' refers to or selects the current HTML element.
  //
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Add click events on all buttons on page. 
    $('.saveBtn').on('click', function(){
      let timeSlot = $(this).parent().attr('id'); // Key 
      let userText = $(this).siblings('.description').val();

      
        // Saves content to local storage 
          localStorage.setItem(timeSlot, userText);
    });

    // Clear all local storage and existing content in textarea. 
    $('#clearBtn').on('click', function(){
     let warningMsg = confirm('WARNING: Are you sure you want to clear all existing data? \n Click "OK" for YES \n Click "Cancel" for NO');
      console.log(typeof warningMsg)
      if (warningMsg == true) {

        localStorage.clear();
        $('.description').val(''); 
  
      }
    
    });

    // Save All button that saves all the entries in every time block at one time. 
    // Instead of saving individually. 






  

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
 

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

    
    
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));

  //
  // TODO: Add code to display the current date in the header of the page.
});

