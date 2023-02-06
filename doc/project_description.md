#Tokyo Olympics Wiki
##Team 2: Anwesha Mishra, Cole Herrmann, Kyungyeon Lee, Sai Aitha 

##Project Summary:
With the title 'Tokyo Olympics Wiki', the team aims to create a Wikipedia-style platform for each athlete who participated in the Tokyo Olympics. The goal is to provide users with an interactive program where they can freely add, update, and delete information about the players, creating a supportive and engaging community. The features of the application include, but are not limited to, searching for players based on their name, team, gender, and discipline, the ability to add, update, or delete information freely, and displaying the top edited players of the week.

##Data 
To successfully implement our idea for this web app, we will be pulling data from the 2021 Tokyo Olympics Dataset (https://www.kaggle.com/datasets/arjunprasadsarkhel/2021-olympics-in-tokyo), a comprehensive dataset that contains information on 11,000 athletes from 743 teams and 47 disciplines. There are 5 different tables (Athletes, Coaches, Entries, Medals, Teams), each with data we will store in our database. For example, information on each athlete such as their first name, last name, gender, nationality, and discipline will be stored so that it can be outputted if a user were to put the correct specifications for the input. We will also store all data on the medals for each country and discipline so that users can see how well a certain country did in a certain sport.


##Project Description and Functionalities 
Usefulness: Our team’s plan for Tokyo Olympics Wiki is to create an interactive page for users to learn about the athletes in the recent games and update the site to insert fun facts and interesting ideas about all of the athletes that took part in competing at Tokyo. While there are sites that provide information about the Tokyo athletes such as Wikipedia and the official Olympics website, there are no sites that provide an interactive experience where individuals can insert, delete, and create data for the site to upload information regarding the players. A good starting point for this project is seeing that a number of websites share facts regarding the whole games so our project differs in hoping to share facts about the players and coaches. 
Realness: Our data consists of 5 CSV files that are categorized by specific groups such as teams, coaches, entries by gender, medals, and athletes. We have pulled this from a reliable data collection site known as Kaggle. We have found that most of the CSVs have consistent columns such as “Athlete Name” or “NOC”-Name of Country. 
Functionalities:  Our database will be formatted in MySQL, and will use Node.js to link the UI javascript dropdown menus to the MySQL data.  Our current data contains 5 tables which we will pull data from, but we also plan to add additional tables for other functionalities such as athlete’s fun facts and previous olympics results. We will have added features that allow the user to enter in their own data values like fun facts and etc; this enables users to interact with the page in a more engaging manner as they learn more about the athletes. 
User Interface (Sai)
Here is a basic potential UI mockup of our web application. The slide on the left displays our applications’s home screen when nothing is selected. The user can select their specifications with the three dropdown menus so that our application can output the player they are looking for. The second slide displays how our application can functionally output the results. With each of the three specifications chosen, the application will output a picture of the athlete if there is one that exists (All athletes will be displayed if there are multiple that fit the criteria). If they won a medal during the Tokyo Olympics, that will also be shown. This is purely just a draft of our application’s interface and is subject to change.

##Team Logistics
At the beginning of the project, we will start by working together on the basic features of the application, including learning SQL syntax and researching the capabilities of SQL. This would help us set a strong foundation for the project and gain a deeper understanding of the project's goal and what features are needed to make the application. As we get more comfortable with SQL and have a clearer understanding of the desired outcome, we will divide the work and concentrate on specific areas like the frontend and backend. In this way, we can work on our project more efficiently and effectively using the skills and expertise that each member has. 

Here is a breakdown of our role distribution throughout this project term: 
Phase 1: Data Cleaning + Parsing 
	Anwesha and Claudia - Inspect the data and ensure that tables + values
	Sai and Cole - Clean the data and eliminate any NULL or invalid data 

Phase 2: Building the backend framework and creating tables + structuring the data 
	All team Members: breaking down the data and understanding how to create the tables 
 
Phase 3: Working on the user interactive features + front-end
	Anwesha, Claudia, and Sai - work on adding the create function 
	Cole - brainstorm and being draft 1 for front end 

Phase 4: Work on back-end features that go above and beyond + developing the front end 
	Anwesha and Claudia - brainstorm + execute features that take our project to the next level (pulling CSVs from different years of the games and etc)
	Sai and Cole- work on the FIGMA + implementing the full effect of the front end 
Phase 5: Finishing touches and completing the project 
	Whole team: work together on completing final touches and submitting the project 

