# <b>Online Calendar</b>

## <b>Description</b>

If you have a habit of forgetting things or looking for a way to manage your time more effectively, this project may just be for you! <br>
For this project, a user can plan their work day using the calendar by saving and submitting their tasks accordingly, depending on the time of day. 
<br> <br> 

One of the key features for this project is the utilization of local storage, which saves the information you put in for every time block after clicking the save icon. Even after leaving the page or closing down your web browser, the information on the page will still be available. If you ever want to clear out the entries for the page, you can click on the clear all button that will first prompt you if you want to proceed, in case the button in clicked on by accident. <br> <br>

The main technologies used for this project included jQuery, which was essential in my opinion to loop through the DOM elements such as the time blocks using the .each() method. The other one was the Day.js library to display the current time and date on the page, but also to compare the current time to the times listed for every time block using a conditional statement. <br><br>

## <b>How to use</b>
Click on the rectangular block that is between the time and save icon. From there, you can type the task you plan to do for that hour and once done, hit the save icon to the very right of the block. This will remain in the browser regardless if you close the tab or browser completely and open it back up, UNLESS, you want to clear all the existing data by clicking the "Clear All" button at the very bottom of the page. 
<br><br>

## <b>Challenges</b>

Some of the challenges I came across with this project were several things, I had difficulty with saving the text entry for the time blocks into the local storage. Also with how to use the .each() method to loop through all the time blocks but with the help of logging everything in the console, it did help me a lot. <br><br>

## <b>Future features</b>
One of the features that I thought was annoying was not having the ability to clear all the data from the page (which I did already implement), although it isn't required in the criteria. <br> <br> 

Another was not having the ability to save all the time block entries at once, instead of clicking on each individual save button to save the entry for that specific time block. I was thinking possibly creating another button that allows you to save all the entries at once by using the .each() method again to loop through all the time blocks and save them all at once. 
<br><br>


## <b>References</b>

Big thank you to my tutor Jehun Jung for guiding me in the right path and teaching me a few tips & tricks :) 
<br><br>

## <b>Screenshot of live demo<b>
<br><br>

## <b>Deployed link to application:
https://mattwhen.github.io/online-calendar/