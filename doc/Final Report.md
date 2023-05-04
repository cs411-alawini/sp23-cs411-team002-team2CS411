# Final Report

## 1. Please list out changes in the directions of your project if the final project is different from your original proposal (based on your stage 1 proposal submission).

There was a slight change in direction from what we had originally wrote from Stage 1. We modeled our current UI very closely to what we had shown in the mockup during stage 1. Rather than only getting data from the Tokyo data set, we also used another table to add an officials table but that was to make our project more comprehensive. Something we also changed (but rather upgraded) was that users could see what fun facts they inserted as well as others.

## 2. Discuss what you think your application achieved or failed to achieve regarding its usefulness.

We believe that our project is extremely useful and unique to its users. By adding a functionality that includes pictures of the athletes that played in the Tokyo Olympics, our users can not only add a fun fact to each of the athletes, but they are also able to see a picture of their athlete. Our website allows for users to see how what athletes played in what discplines during the games and what coaches are involved in what disciplines. Moreover, we enable for users to see what countries/athletes have won what medals.

## 3. Discuss if you changed the schema or source of the data for your application

We added a table to our schema: the Officials table. While all of the rest of our tables came from the original Tokyo dataset, we wanted to add a table that would add to the data compatibility of the schema/project. We kept the data from the Tokyo dataset the same but we ran into an issue of having duplicates. In that case, we noticed how individuals who had the same usually had the same first and last name but they had different disciplines; this made it easier for us to parse our data and make unique values for the different tables. In one case, we had an athlete under the name "Muhammed Ali", two of which were in the same disciple for the same country so this was the only place where we had to change the original data schema a little bit. 

## 4. Discuss what you change to your ER diagram and/or your table implementations. What are some differences between the original design and the final design? Why? What do you think is a more suitable design? 

Since we added an external data source, we had to alter our ER diagram to add an additional table. This table gave us a sufficient amount of entries that could be matched with all of our athletes and we could do something besides the standard relation between an athlete, their country, and discipline. We kept this as our final design because we saw clearly how many athletes belong to one coach, many athletes belong to one country, and one country can have many medals (only to name a few). We had to ensure that we had the correct foreign keys and attributes; this process required us to go back and reread how all of the tables are connected to each other. When we added our Officials table to our "Stage 3: Database Implementation" phase, we had to go back and ensure that our ER diagram matched this. 

## 5. Discuss what functionalities you added or removed. Why?

The core functionalities remained the same: allowing users to create, update, delete. As per our midterm demo, we had the functionalities of being able to: 
  - insert rows into the tables (applies to our funFact table) 
  - search database for keyword (applies to our Athletes and Coaches table to find athletes/coaches)
  - update records on the database (applies to our funFact table for a user to update the fact that they inserted) 
  - delete rows from the database (applies to our funFact table for a user to delete the fact that they inserted) 
  - integrate into your application both of the advanced SQL queries you developed in stage 3 (created stagnant features for our two advanced queries)
 
In our final demo, we added the functionalities for the users to select what parameters they can include in the search while in our midterm demo, we only allowed for the user to insert the athlete/coach name. 

## 6. Explain how you think your advanced database programs complement your application.

We had a stored procedure program for each advanced query. Our first advanced program complimented our application by adding extra information that highlights the athletes that won for each event. Our programmed work so that when you clicked a specific athlete, the application will go to a different page with fun facts you can add, but also information on the athlete that won that even. We thought that this information was useful because the athletes that won first place deserve the proper recognition. Our second advanced program handled the second advanced query, which returned the coaches of athletes that won a gold medal. This program complimented our application because we wanted coaches to get the recognition they deserve. We believe that most of the user will not be searching for coaches, so we added to this program to make sure the users can learn more about the successful ones.


## 7. Each team member should describe one technical challenge that the team encountered.  This should be sufficiently detailed such that another future team could use this as helpful advice if they were to start a similar project or where to maintain your project. 

- Claudia: We initially used SSH to connect to a shared directory in GCP, where all our files were stored. However, this method proved to be unreliable as the server would crash when more than two people were connected to it. Whenever that happens, we had to restart GCP, which caused delays in our progress, especially when working in-person. Therefore, I think it is better if each team member set up their own working directory inside GCP and connect it to the team github repository. This would allow for simultaneous work on the project without overloading the server. 

- Anwesha: A technical challenge we encountered was creating relations with our tables. We knew we wanted to use the Tokyo olympic dataset but with that, we felt rather restricted by how the tables were created and how the relations were forming. Once we added our officials and medals table, we were able to better conceptualize the tables and it really eliminated the road block that we had. 

- Sai: On technical challenge we faced was creating the unique ids for each table. We initially made the primary keys for the athletes the names of the athletes. What we did not realize was that there are many different athletes that participated in the Olympics with the same first and last name. While our first idea to this problem was to just delete the duplicate-named athletes so that there is only one athlete for each name, we decided not to take this route as the database would be innacurate without every athlete represented. We solved this problem by making multiple primary keys. We changed the design for the athlete table so that the primary keys are the first name, last name, and the discipline they participated in. This made it so that each row was unique.

## 8. Are there other things that changed comparing the final application with the original proposal?

Our final application was different form our original proposal in our UI mockup. We originally mocked up one page with the search bars, and this same page updates after a query with the resulted athletes/coaches. However, our final application added an additional page for every athlete with fun facts about them. We also added CRUD operations in this external page to add/delete/edit the facts. 

## 9. Describe future work that you think, other than the interface, that the application can improve on

I think that the application can improve by implementing a working user id authentication system. The way we have it now, the user can write their ID when add a fact. However, this allows different users to have the same id. If we add a login system, this ensures that each fact has a unique id attached to it. This makes our application cleaner and also better for future querying.

## 10. Describe the final division of labor and how well you managed teamwork.

The division of labor was fairly equal. While Cole was more experienced in developing web applications like these, everyone else put in the effort for the rest of the project. The way we managed teamwork was timely and coordinated. We met up often to finish up stages and everyone's tasks were always finished on time.
