# Focus Pod Productivity Dashboard

![examples of the project site shown on different sized screens](assets/img/)

This is a website to provide users with a number of useful productivity tools on one page. 

It is a mobile first, responsive design and the live website can be viewed [here](https).

An example of how the homepage looks on various screensizes is included above.


## USER EXPERIENCE:

### Who will use the website?
The site will be used by anyone who is looking for a system to support their productivity and help them to keep track of tasks that need to be done. 


### Students (User A)
**Goals:**
- Create and keep track of a to do list;
- Stay focused on the tasks at hand;
- Keep track of time;
- More likely to be working from a variety of places: classrooms, library, at home, and therefore likely to benefit from the ability to access the site on a mobile device. 
- Users of the site are likely to be very busy individuals and therefore it is important that the site is user friendly and intuitive and that it isn't going to take a long time to understand how it works. 

### Professionals (User B)
**Goals:**
- Create and keep track of a to do list;
- Stay focused on the tasks at hand;
- Keep track of time;
- More likely to be working from a desktop or laptop computer alongside other windows and likely to benefit from being able to resize the browser window to fit in alongside other work. 
- If working in the office around colleagues it is important that the site is clearly work based. 

## STRATEGY PLANE:

**Project Purpose from the perspective of the site owners:**


- Provide a one stop productivity dashboard. 

    - **Strategy:** I will do this by keeping the main content of the site to one page to avoid distraction from navigating around the site. The to do list feature  and will be prominently displayed on the main page so that users can always see the tasks they are working on and keep an eye on the time as these are the most important features.


- Provide additional tools to help with focusing. 

    - **Strategy:** I will do this by providing additional features on the same main page, and designing the page so that these features are accessed by clicking on neat minimalist icons. This will help to provide rich functionality without the visual impact of the page being cluttered or distracting. 


- Create a calm visual environment

    - **Strategy:** I will create a calming visual environment by using high resolution images from nature as the background images for the site. There will be an option to toggle on 'dark mode' by clicking on a moon icon, and to toggle back by clicking on a sun icon. 


**Viability of features:**
| Feature                               | Importance  | Viability   |
| --------------------------------------|------------ |-------------|
| Ability to add items to a to do list  |     5       |     5       |
| Ability to check off done items       |     5       |     5       |             |
| Ability to delete to do items         |     5       |     5       |             |
| Clock                                 |     5       |     5       |
| Dark mode option                      |     4       |     4       |
| Rain sounds player                    |     5       |     3       |
| Pomodoro timer                        |     4       |     4       |
| Gratitude list                        |     3       |     3       |
| Focus mode with a website blocker     |     3       |     1       |
               
After my initial research, I have decided not to attempt to include a 'focus mode' with a website blocker in this project as it is far beyond the scope of my knowledge and I have not been able to find a way of doing this which is built in a web page only. 

## SCOPE PLANE:

The website will include the following features: 

- To do list with ability to add tasks, remove tasks and mark tasks as completed.
- Dark mode feature which will change the styling of the page to dark colours. 
- Gratitude list where users can note three things they are grateful for that day. 
- Pomodoro timer which sets a 25 minute timer. Users will be able to start, pause, restart and reset the timer. 
- Rain sounds player to be provided by Spotify using an embedded player where users can start and stop playing a playlist of rain sounds from within the page to help them to focus. 




## STRUCTURE PLANE:

The following pages will be included in the project:

- The project will contain one main page so that all the features can be neatly accessed from one place without the user getting distracted by navigating between different pages/tabs. 


**Changes from original plan:**
- I have added an 'About' page to provide additional information about how to use the site. This has enabled me to keep to my initial aim of keeping the main page as uncluttered as possible, whilst still providing extra support for users who require it. The anticipated users of this projects are of all ages, and the About page including detailed instructions on how to use each feature of the project supports this by supplementing the information available for users who may be less used to using this type of product.

## SKELETON PLANE

![wireframe of plan for mobile page structure](/wireframes/mobile_wireframe.png)

![wireframe of plan for desktop page structure](/wireframes/desktop_wireframe.png)




Before starting to code the website I prepared wireframes showing the planned page structures for mobile and laptop sizes on each page. This helped me to identify the basic page structure I wanted to achieve, and the wireframes show that I was planning to have a consistent layout with the to do list and clock taking centre stage from the outset. The wireframes also show the plans for the features to be hidden and accessed by cliicking neat, consistent icons on both mobile and desktop. The reason for this is so that the page can be customisable to the users needs and remain visually uncluttered to assist with focus. I am also anticipating that even desktop users or those using generally larger screens may not be able to use the full size of the screen available to them if they are also trying to juggle other programs, documents or sites whilst they work and there is therefore a high chance with this project that the user will be accessing the site from a small or unusually shaped screen. Making the site customisable as well as fully responsive on different screen sizes allows me to cater for this without losing functionality or accessibility. 

The navigation structure I chose to pursue was based on simplicity to help the users feel comfortable on the website straight away and customisation so that the user can tailor the site to their own needs without any fuss. 


Changes since planning stage: 
- One small change I made to the icons used was to omit the use of the Spotify icon in the final project, whereas it was included in the initial wireframes. The reason for this is that on further discussion with the band as the project progressed I became aware that not all of their music is currently available on Spotify as it is in the process of being re-mastered. For that reason, I decided to use Bandcamp as the music source as it has the full collection available. As the site includes individual album pages where users can stream or link to buy the music, I decided to not also add a separate icon to link to Bandcamp because I felt that this risked taking the user away from our site without adding much value.

[Link to Wireframes](https://github.com/megan-grug/focus-pod/blob/master/wireframes/wireframes.pdf)




**Changes since planning stage:**



## SURFACE PLANE

**Colour scheme:**
- I chose a muted colour scheme for most of the page components in keeping with the 'nature' theme in place, but selected brighter colours and used icons with thick black line borders to represent the features in order to draw attention to them. 

**Typography:**
- For this project I have chosen plain, professional fonts for the main body of the site to keep the pages visually calming and avoid distractions. I used a heavier font for the descriptions in the icons leading to the features so as to make it very clear what they do. 

**Themes:**
- I have included a subtle nature theme by using background images from nature, and referencing nature in the main icons (rain cloud, moon, sun, and tomato). This is echoed by including the rain sounds feature. The logic behind this is that nature is well documented to be calming and subtle nods and exposures to it can help users to feel more relaxed, making it easier for them to focus. 


## TECHNOLOGIES USED

### Languages:
-	HTML5
-	CSS3
-   JavaScript


### Frameworks, Libraries and Programs:
-	**Bootstrap 5:**
Used for consistent styling and responsiveness. 

-   **jQuery:**
Used to provide neat interactivity, for example the 'slide down' of the features. 

-	**Google Fonts:**
Used to import custom fonts IM Fell English SC and Special Elite as referred to above. 

-	**Font Awesome:**
Used to import icons used to create custom buttons, such as the delete button for the to do list.

-	**Git:**
Used for version control between GitPod and GitHub.

-	**GitHub:**
Used to store and deploy the project. 

-	**Moqups:**
Used to create initial wireframes as part of the planning and designing stage. 

-   **Google Developer Tools:**
Used to inspect each page and function of the site and to check each element and function at a granular level to ensure it is working as planned.

-  **Firefox Developre Tools:**
Used to inspect each page and function of the site and to check each element and function at a granular level to ensure it is working as planned.

## TESTING:

### VALIDATOR SERVICES:
- **W3C Markup Validator:**
       

- **W3C CSS Validator:**
    

- **Lighthouse:**
    


### MANUAL TESTING

I have manually tested the site by: 

- visiting each page;
- methodically checking that it looks right at every size;
- methodically checking that every feature works as intended at various sizes. 


Manual testing was undertaken on the following browsers with no noticable differences:
- Google Chrome;
- Mozilla Firefox;
- Microsoft Edge;
- Opera;
- Safari 


**Bugs Identified in Manual Testing**




### USER STORIES TESTING:



**FUTURE PLANS**



## DEPLOYMENT

**GITHUB PAGES**

The project was deployed to GitHub Pages as follows:

- Log in to GitHub;

- Navigate to the GitHub repository for this project;

- Click 'Settings' in the repository;

- Under 'Settings' select 'Git Hub Pages';

- Under 'Source' select 'None' and then 'Master Branch'.

- When the page refreshes, scroll down to 'Git Hub Pages' and find the published site. 


*Forking the repository on GitHub*

This will allow you to make changes to the project without affecting the original by making a copy of the project and working from that. 

- Log in to GitHub;

- Navigate to the GitHub repository for this project;

- Click 'Settings' in the repository;

- Under 'Settings' select 'Fork';

- Under 'Source' select 'None' and then 'Master Branch'.

- This will create a copy of the original project repository.


*Cloning*

- Log in to GitHub;

- Navigate to the GitHub repository for this project;

- In the repository, click 'Clone or download';

- To use HTTPS, copy the link under 'Clone with HTTPS';

- Open GitBash;

- Change the working directory to the location where you want to put the cloned directory.

- Type 'git clone' and then paste the link you copied from 'Clone with HTTPS'.

- Press enter to complete the creation of the local clone. 


## CREDITS

### Code Credits


### Media Credits

**Favicon:**    
The emoji graphic 'Hourglass Not Done' is from the open source project Twemoji. The graphics are copyright 2020 Twitter, Inc and other contributors. The graphics are licensed under CC-BY 4.0.
The various sizes of Favicon were produced and downloaded at favicon.io.

**Photographs:**

- 'dayforest' background image 
photograph by [Filip Zrnzević](https://unsplash.com/@filipz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/s/photos/forest?utm_source=unsplash&utm_medium=referral&tm_content=creditCopyText"). Free to use under licence from Unsplash. 

- 'nightforest' background image photograph by [Jon Asleeb](https://unsplash.com/@_leeeeb_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/forest-night?utm_source=unsplash&utm_medium=referral&tm_content=creditCopyText). Free to use under licence from Unsplash. 
  
**Icons:**

- Heart icon made by [itim2101](https://www.flaticon.com/authors/itim2101) from [Flaticon](https://www.flaticon.com/). 
Free for personal and commercial use with attribution under Flaticon License.
  

- Sun icon made by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/"). Free for personal and commercial use with attribution under Flaticon License.


- Moon icon made by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/). Free for personal and commercial use with attribution under Flaticon License.

- Tomato icon made by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect) from [Flaticon](https://www.flaticon.com/). Free for personal and commercial use with attribution under Flaticon License.

- Rain cloud icon made by smalllikeart from [Flaticon](https://www.flaticon.com/). Free for personal and commercial use with attribution under Flaticon License.

**Content:** 

All written by the developer.

**Music:**

Music provided through Spotify. Embedded music player by Spotify and all music credits available direct from Spotify.   


### Acknowledgements

I would like to thank my mentor Sammy Dartnall for her positivity and enthusiasm and Adam Milner for many late night cups of tea.  
