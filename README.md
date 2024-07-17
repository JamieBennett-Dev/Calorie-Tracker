# Calorie Tracker

## Introduction

👋 Welcome to the Calorie Tracker App! This application is designed to help you monitor your daily calorie intake and manage your nutritional goals effectively.

🎯 Whether you're looking to lose weight, maintain a healthy diet, or simply track your food consumption, our app provides you with the tools you need.

![Screenshot](static/images/ct-main.png)

[Link to Calorie Tracker website](https://calorie-tracker505-bba2b7fbcdfa.herokuapp.com/)

## Why choose our Calorie Tracker?

1. **User-Friendly Interface:** We offer an intuitive and easy-to-navigate interface, making it effortless for users to log their meals and track their calorie intake without any hassle.

2. **Comprehensive Meal Logging:** Easily log all your meals, snacks, and beverages throughout the day, ensuring you have a complete overview of your nutritional intake.

3. **Automatic Calorie Calculation:** Our app automatically calculates the total calories consumed based on the foods logged, saving you time and effort in manual calculations.

4. **Visual Progress Tracking:** Visualise your daily, weekly, and monthly calorie consumption trends through charts and graphs, providing insights into your eating habits and progress over time.

5. **Mobile Accessibility:** Access our Calorie Tracker on the go with mobile responsiveness, allowing you to log meals and monitor your progress wherever you are.

6. **Data Privacy and Security:** We prioritize the security and privacy of your data, ensuring that all your personal information and dietary logs are kept confidential and secure.

## User Stories

As a User:
|I want to.. | So that I can.. | Acceptance Criteria
| ----------- | ----------- | ----------- |
| Sign up for an account. | Track my calorie intake. | 1: The user can access a sign up from the homepage and navbar. 2: The form requires a unique username, email and password.
| Log into my account. | Access my personal data. | 1: The user can access a login form from the homepage and navbar. 2: The user must enter a valid username and password to log in. 3: Upon successful login, the user is redirected to their dashboard.
| Navigate the site easily using a clean and intuitive interface. | Quickly find and use the features I need. | 1: The user can access main features (profile, food log, weight history) from a clear and intuitive navigation menu. 2: All pages are designed with a consistent layout and design.
| See my data presented in a clear and visually appealing manner using charts and graphs. | Better understand my progress and dietary habits. | 1: The user can view their data (food intake, macronutrient breakdown, weight history) in charts and graphs. 2:The data is updated in real-time as new entries are logged.
| View my basic information. | Keep track of my account activity. | 1: The user can view their username, join date, and last login date on their profile page. 2: The information is displayed in a clear and readable format.
| See a history of my previous weights and calorie additions. | Monitor my progress. | 1: The user can access their history from/on their profile. 2: The history shows a list of previous weights and calorie additions in chronological order. 3: Each entry includes the date, weight, and calorie addition details.
| Log my daily food intake. | Track my calorie consumption. | 1: The user can access a food log form from their dashboard. 2: The form allows the user to select food items and enter quantities. 3: A confirmation message is displayed upon successful logging of food intake.
| See a log of my previous food intakes. | Review my eating habits over time. | 1: The user can access a log history from their dashboard. 2: The log history displays a list of previous food intakes with dates and details. 3: The user can sort or filter the log history by date or food type.
| Record my weight. | Monitor my weight changes over time. | 1: The user can access a weight entry form from their dashboard. 2: The form requires the user to enter their current weight. 3: A confirmation message is displayed upon successful weight entry.
| View a weight history chart that updates with each new entry. | Visualise my weight trends. | 1: The user can view a weight history chart on their dashboard. 2: The chart updates dynamically with each new weight entry. 3: The chart displays weight trends over time.
| View a macronutrient breakdown chart of my logged food. | Understand my nutritional intake in terms of fats, carbs, and protein. | 1: The user can view a macronutrient breakdown chart on their dashboard. 2: The chart updates dynamically based on the logged food intake. 3: The chart shows the proportions of fats, carbs, and protein.
| See a list of food items along with their nutritional values. | Choose what to eat based on my dietrary needs. | 1: The user can access a foods list from the homepage and navbar. 2: Each food item displays its name, category, and nutritional values (fats, carbs, protein).
| Add a new food item by filling out required fields. | Log foods that are not already in the database. | 1: The user can access an 'Add Food' form from the food list page and navbar. 2: The form requires fields for name, category and nutritional values. 3: A confirmation message is displayed upon successful addition of a new food item.
| View food items by category. | Easily find what I am looking for. | 1: The user can filter food items by category via the navbar. 2: Only food items within their selected category are dispalyed.
| Ensure my personal and health data is stored securely. | Ensure my privacy is protected. | 1: All personal and health data is encrypted in the database. 2: The user’s data is not shared with third parties without consent.
| Ensure my password and personal information is stored securely. | Ensure my privacy is protected. | 1: Passwords are stored using secure hashing algorithms. 2: The application uses HTTPS to secure data transmission.

As an Admin:
|I want to.. | So that I can.. | Acceptance Criteria
| ----------- | ----------- | ----------- |
| Add food items to the food tracker app through the Django admin interface. | Ensure users have a more comprehensive food database to choose from. | 1: The admin can access the food management interface through the Django admin dashboard. 2: The admin can add new food items by entering required details. 3: A confirmation message is displayed upon successful addition.
| Upload images for food items. | Ensure users can have a visual reference for the foods they are logging. | 1: The admin can upload images for food items through the Django admin dashboard. 2: The uploaded images are displayed alongside the corresponding food items in the food list.

## Workflow

### Agile Methodology
For this project I adopted an Agile methodology. This is the first time I have used this on a solo project, however, I have used it as a group during three previous hackathons. This has helped me to: 
- Organise and prioritise my workflow.  This has been essential due to the very limited timeframe we had to complete this project.
- Enabled me to adjust my expectations and still produce the required MVP

I created a site map and workflow diagram: 

![Screenshot](static/images/ct-schema.png)

I used Github projects to convert my user stories into actionable tasks. The acceptance criteria was very helpful to ensure all necessary tasks were completed.

![Screenshot](static/images/ct-kanban2.png)

## Design

This site is fully responsive and accessible on mobile, tablet and desktop devices.

### Wireframes

Homepage Wireframe:

![Screenshot](static/images/ct-wf-homepage.png)

Food Log Wireframe:

![Screenshot](static/images/ct-wf-foodlog.png)

User Profile Wireframe:

![Screenshot](static/images/ct-wf-profile.png)

## Features

**All Users:**
- Are able to view added items
- Are able to access log in or register

Homepage:

![Screenshot](static/images/ct-index.png)

Login:

![Screenshot](static/images/ct-login2.png)

Register:

![Screenshot](static/images/ct-register.png)

**Logged in Users:**
- Are able to view items by category
- Are able to add new items
- Are able to access their personal food log
- Are able to access their personal profile
- Are able to log out

User Profile:

![Screenshot](static/images/ct-userprofile2.png)

Food Categories:

![Screenshot](static/images/ct-foodcategory.png)

Food Log:

![Screenshot](static/images/ct-foodlog.png) 

Food View:

![Screenshot](static/images/ct-foods.png)

Add Food:

![Screenshot](static/images/ct-foodadd.png)

Update Food:

![Screenshot](static/images/ct-updatefood.png)

## Design Choices

### Colours

I used [coolors.co](https://coolors.co/00173d-0056e0-adcdff-3d001b-e00061-ffadd1) to generate my colour pallet:

![Screenshot](static/images/ct-colours.png)

I chose a clean and simple website design that prioritises content. Using a vibrant color scheme, I aimed to balance minimalism with boldness. The off-white background (#f1f1f1) maintains simplicity and cleanliness, while splashes of color inject visual interest against this neutral backdrop. This approach creates a modern aesthetic that is stylish yet restrained.

The combination of blue and raspberry forms a harmonious contrast, complemented by cool off-white tones, ensuring a cohesive and balanced palette. Neutral colors were selected to promote overall harmony.

The result is a thoughtfully curated color palette that enriches the design with sophistication and vibrancy while preserving its elegance.

## Validation Testing

### HTML Validation

**templates/delete_food.html** No errors upon first entry 🎉:

![Screenshot](static/images/ct-htmldeletefoodvalidation.png)

**templates/food_add.html** No errors upon first entry 🎉:

![Screenshot](static/images/ct-htmlfoodaddvalidation.png)

**templates/food_category.html** 1 error upon entry:

![Screenshot](static/images/ct-htmlfoodcategoryvalidation.png)

**templates/food_log_delete.html** No errors upon first entry 🎉:

![Screenshot](static/images/ct-htmlfoodlogdeletevalidation.png)

**templates/food_log.html** Multiple errors upon first entry, all regarding an ID being used more than once:

![Screenshot](static/images/ct-htmlfoodlogvalidation.png)

**templates/food.html** Multiple errors upon first entry, all regarding an ID being used more than once:

![Screenshot](static/images/ct-htmlfoodvalidation.png)

**templates/index.html** Multiple errors upon first entry, regarding an ID being used more than once & bad button type:

![Screenshot](static/images/ct-htmlindexvalidation.png)

**templates/login.html** 2 errors upon first entry, both regarding an ID being used more than once:

![Screenshot](static/images/ct-htmlloginvalidation.png)

**templates/register.html** Multiple errors upon first entry, all regarding an ID being used more than once:

![Screenshot](static/images/ct-htmlregistervalidation.png)

**templates/update_food.html** No errors upon first entry 🎉:

![Screenshot](static/images/ct-htmlupdatefoodvalidation.png)

**templates/user_profile.html** Multiple errors upon first entry, regarding an ID being used more than once & 'for' attribute in label element must be the ID of a non-hidden form control:

![Screenshot](static/images/ct-htmluserprofilevalidation.png)

**templates/weight_log_delete.html** No errors upon first entry 🎉:

![Screenshot](static/images/ct-htmlweightlogdeletevalidation.png)

### HTML Validation Conclusion

In conclusion, this HTML validation testing has been a crucial learning experience for my first solo Django project. The primary reasons for the errors identified were the use of an ID more than once, incorrect use of the 'for' attribute in label elements (which must point to the ID of a non-hidden form control), and improper button type values. By identifying and rectifying these issues, I have not only improved the quality and robustness of my project but also gained valuable insights into best practices for HTML and form handling. Learning from these mistakes will undoubtedly benefit me in my future web development endeavors, ensuring more efficient and error-free coding.

### CSS Validation

**static/css/style.css** No Errors upon first entry 🎉:

![Screenshot](static/images/ct-cssvalidation.png)

### CSS Validation Conclusion

In conclusion, the CSS validation testing for my first solo Django project has been an encouraging and exciting experience. The tests threw zero errors, which both surprised and thrilled me. This validation result indicates that my approach to CSS was effective and aligns with best practices.

Linking to the issues identified in the HTML validation, such as IDs being used more than once, it's clear that while there were structural issues in the HTML, the CSS was implemented correctly. This outcome not only boosts my confidence in my current project but also excites me about my future in web development. With a strong foundation in CSS, I am well-equipped to tackle more complex styling challenges in upcoming projects. Learning from these experiences will ensure more efficient and error-free coding moving forward.

### JavaScript Validation

**static/js/foodDetails.js** Eight warnings upon first entry:

![Screenshot](static/images/foodDetails.jsval.png)

**static/js/foodLog.js** Eleven warnings upon first entry:

![Screenshot](static/images/foodLog.js.png)

**static/js/foods.js** Two warnings upon first entry:

![Screenshot](static/images/foods.js.png)

**static/js/userProfile.js** Eight Warnings upon first entry:

![Screenshot](static/images/userProfile.js.png)

### JavaScript Validation Conclusion

In conclusion, this JavaScript validation testing has been a crucial learning experience for my first solo Django project. The primary reasons for the errors identified were the usage of const and let keywords, and the spread operator, which are only available in ES6 or Mozilla JS extensions. By identifying these issues, I have not only improved the quality and robustness of my future projects but also gained valuable insights into best practices for JavaScript version compatibility and coding standards. Learning from these mistakes will undoubtedly benefit me in my future web development endeavors, ensuring more efficient and error-free coding.

### Python Validation

**config/settings.py**  Five warnings, lines too long:

![Screenshot](static/images/configsettings.py.png)

**config/urls.py**

**foodtracker/admin.py**

**foodtracker/forms.py**

**foodtracker/models.py**

**foodtracker/tests.py**

**foodtracker/urls.py**

**foodtracker/views.py**

### Python Validation Conclusion

## Technologies Used

- HTML.
- CSS.
- Bootstrap.
- JavaScript.
- Python.
- Django.
- PostgreSQL Database.

- GitPod development environment used.
- GitHub used for version control and code hosting.
- GitHub Projects used for Agile Methodology.
- W3C for validation testing.

## Deployment

I used [Heroku](https://dashboard.heroku.com/) to deploy my project.

To deploy to Heroku, I followed these steps:

1. Project Setup: Configured the Django project for production by setting up ALLOWED_HOSTS, static files, and installed necessary dependencies.

2. Heroku Setup: Created a new Heroku application using the Heroku CLI and added the Heroku Git remote to our project.

3. Procfile: Added a Procfile to specify the command to run our app.

4. Database Configuration: Configured the project to use Heroku's PostgreSQL database by updating the DATABASES setting in settings.py.

5. Environment Variables: Set necessary environment variables on Heroku, such as SECRET_KEY and DATABASE_URL, using the Heroku CLI.

6. Static Files: Configured the project to collect and serve static files using whitenoise by updating the MIDDLEWARE and STATICFILES_STORAGE settings.

7. Deployment: Pushed the project to Heroku using Git, triggering Heroku to build and deploy the application.

8. Migrations: Ran database migrations on Heroku to set up the database schema.

9. Application Monitoring: Monitored the application logs using the Heroku CLI to ensure the deployment was successful and the application was running smoothly.


## Credits

- I got various ideas from different projects on GitHub [here](https://github.com/topics/calories-tracker).
- I used a Favicon I found on Google [here](https://www.google.com/search?sca_esv=5253a18b766cf5c0&sxsrf=ADLYWILTbik0GwE4j9HATDwkyEsPvy9d8w:1720365503275&q=calorie+calculator+logo&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jo6Ttnu6iRjjgGjARfLolnBYg2tMdxbJFpG2a0dg6n0NSOUeL_Zp-ANwJjueSBq_UoE1Rqmx1qtxWQlddKd0bEv4-fvXrL1UXtmb7rYJIBkr79X849_zmlFz-2AGdL47Zwhhols&sa=X&ved=2ahUKEwj1n9P1nJWHAxWNVUEAHdffAt0QtKgLegQIDxAB&biw=1536&bih=695&dpr=1.25#vhid=pA5LQEXfUDD7oM&vssid=mosaic).
- I got ideas for charts and graphs on [Chart.js](https://www.chartjs.org/).
- [ChatGPT](https://openai.com/index/chatgpt/) was used for troubleshooting, bug fixing and content generation.
- [Fontawesome](https://fontawesome.com/) was used for icons.
- I used two Google fonts, [Lilita-One](https://fonts.google.com/specimen/Lilita+One) and [Sarabun](https://fonts.google.com/specimen/Sarabun).
- [Balsamiq](https://balsamiq.com/?gad_source=1&gclid=Cj0KCQjw-ai0BhDPARIsAB6hmP6Mb5eLQ-GmH_6RLHGgnC3Ps3wIRQytZzXU2XrksuZ-kLtD9tO3hicaAlgvEALw_wcB) was used to create my Wireframes.
- The Database diagram was created via [dbdiagram](https://dbdiagram.io/d).