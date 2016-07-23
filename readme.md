Step 1 - step up the front end public folder
1. index.html
2. all the angular files (app,mainCtrl,dataService,routes)
3. tested all the connections({{test}} and Routes)

Step 2 - Set up Server.js
1. added all Dependencies,middleware,connections
2. added new view and route and called home

Step 3 - Set up DataBASE
1. add mongoose stuff and link it to m-labs (from old project)

Step 4 - Lets set up the Login Page (with FACE BOOK)
1. need npm packages (passport, ect...)
2. took over 30 minutes to investigate how to have face book Strategy outside the serverjs.
3. but reverted to what i learned yesterday. (everything in server.js)

Step 5 - Lets set up home page (similar to old project)
1. selecting picture took long time
2. and being routed via routes
3. line the add glyphicon and heading
4. On click ==> input box will appear with "add List" button, upon add List, list should appear.
5. add rest of the body

Business
1. List (heading)
2. task (children of heading)

Step 6. Now save the list item in the dataBase(on ng-click)
1. model.js to define the Data Structure (lets call this as list.model.js) (DONE)
2. List controller to do the crud operations(DONE)
3. link these files with server.js(DONE)
4. I FORGOT - Linking dataService, mainCtrl, and home.html

Step 7 - In step 6 I posted the data to server. Now do GET OPERATION

STOP STOP ----
PostMan POST AND GET are working however,
dataService and unable to post and get from front end.

Next day - I was not passing the listName in the ng-click
1. ng-model = "listName" (its getting captured)
2. That should be passed into the function where ever it is sitting.

Step 8 - Delete the List from Front end
1. Inserted x on the list div on the right side
2. ng-click delete-list(listName) in index.html
3. Function to delete in mainCtrl

***IT WORKED!!! THAT MADE ME HAPPY!!!!***

After celebrating. i checked dataBase.. I still see the lists in it. It makessense. I need to pass on the delete button to server.js

Step 9 - Delete from dataBase
1. I had to learn the importance of params:id (still need more understanding)

Step 10 - Now lets work on TASKS
1. Set up home.html
2. mainCtrl
3. dataService
4. taskCtrl
5. taskModel
6. server.js
