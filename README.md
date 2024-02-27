
The local json server can be run using the command:

"npx json-server --watch data/db.json --port 3001"
Port number 001, because that was what I used in the project.

The project has two major components, the ScheduleForm and the ScheduleList
The ScheduleForm is set to take user input, with selection available for the day, input available for the start and end hours
of each period. The input for the start and end hours for each period is unnecessary on the face, it was put initially because the
input type was set to time. However, on consideration of the input shown on the design as text, "CLOSED". 
I didn't bother removing it since I rendered the same thing at the end. 
If this is to be removed, I can do so anytime.

The ScheduleForm takes the input one by one from Monday to Sunday, and at the end there is a button that takes you to the 
ScheduleList to render the schedule you have created. I have doubts about the implementing of this button, if one should be allowed 
to use the button before they complete the schedule creation or not.

I added submit buttons to the input field for posting to the server. 
I added delete buttons to the ScheduleList for deleting from the server.

If there are any changes that need to be made, I can carry them out right away, as I am a fan of incremental development.