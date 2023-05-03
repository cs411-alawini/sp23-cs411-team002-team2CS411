# Final Report

## 1. Please list out changes in the directions of your project if the final project is different from your original proposal (based on your stage 1 proposal submission).

There was so significant change in direction from what we had originally wrote from Stage 1. We modeled our current UI very closely to what we had shown in the mockup during stage 1. Rather than only getting data from the Tokyo data set, we also used another table to add an officials table but that was to make our project more comprehensive. Something we also changed (but rather upgraded) was that users could see what fun facts they inserted as well as others.

## 2. Discuss what you think your application achieved or failed to achieve regarding its usefulness.

We believe that our project is extremely useful and unique to its users. By adding a functionality that includes pictures of the athletes that played in the Tokyo Olympics, our users can not only add a fun fact to each of the athletes, but they are also able to see a picture of their athlete.

## 3. Discuss if you changed the schema or source of the data for your application

We added a table to our schema: the Officials table. While all of the rest of our tables came from the original Tokyo dataset, we wanted to add a table that would add to the data compatibility of the schema/project. We kept the data from the Tokyo dataset the same but we ran into an issue of having duplicates. In that case, we noticed how individuals who had the same usually had the same first and last name but they had different disciplines; this made it easier for us to parse our data and make unique values for the different tables. In one case, we had an athlete under the name "Muhammed Ali", two of which were in the same disciple for the same country so this was the only place where we had to change the original data schema a little bit. 

## 4. Discuss what you change to your ER diagram and/or your table implementations. What are some differences between the original design and the final design? Why? What do you think is a more suitable design? 

Since we added an external data source, we had to alter our ER diagram to add an additional table. This table gave us a sufficient amount of entries that could be matched with all of our athletes and we could do something besides the standard relation between an athlete, their country, and discipline. We kept this as our final design because we saw clearly how many athletes belong to one coach, many athletes belong to one country, and one country can have many medals (only to name a few).

## 5. Discuss what functionalities you added or removed. Why?

The core functionalities remained the same: allowing users to create, update, delete. 

## 6. Explain how you think your advanced database programs complement your application.

## 7. Each team member should describe one technical challenge that the team encountered.  This should be sufficiently detailed such that another future team could use this as helpful advice if they were to start a similar project or where to maintain your project. 

- Claudia: We initially used SSH to connect to a shared directory in GCP, where all our files were stored. However, this method proved to be unreliable as the server would crash when more than two people were connected to it. Whenever that happens, we had to restart GCP, which caused delays in our progress, especially when working in-person. Therefore, I think it is better if each team member set up their own working directory inside GCP and connect it to the team github repository. This would allow for simultaneous work on the project without overloading the server. 

## 8. Are there other things that changed comparing the final application with the original proposal?

## 9. Describe future work that you think, other than the interface, that the application can improve on

## 10. Describe the final division of labor and how well you managed teamwork.
