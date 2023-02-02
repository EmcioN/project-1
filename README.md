# Warzone 2.0 Tips and Tricks
![warzone](/assets/img/warzone4.jpg)
## Goal for the Project
This website is all about Warzone 2.0 tips and tricks. Here you will find everything you need to know in order to make the most out of your experience with the game. It also contain images from the game and download link for new players.
## Table of Contents
- [UX](#ux)
  * [User Goals](#user-goals)
  * [User Stories](#user-stories)
  * [Site owner Goals](#site-owner-goals)
    * [Requirements](#requirements)
    * [Expectations](#expectations)
  * [Design Choices](#design-choices)
    * [Font](#font)
    * [Icons](#icons)
    * [Colours](#colours)
    * [Structure](#structure)
  * [Features](#features)
    * [Navigation Bar](#navigation-bar)
    * [Main Section](#main-section)
    * [Tips and Tricks Section](#tips-and-tricks-section)
    * [Gallery Section](#gallery-section)
    * [Download Section](#download-section)
    * [Find Me Section](#find-me-section)
  * [Tehnologies used](#tehnologies-used)
    * [Languages](#languages)
    * [Tools](#tools)
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Credits](#credits)
## UX
### User Goals
* Visually appealing, including images.
* Valuable content. 
* Easily navigated.
### User Stories
* As a user, I want to know how to improve my gameplay.
* As a user, I want to know how the game looks like.
* As a user, I want to know how I can download the game.
* As a user, I want to know where I can find more information about creator.
* As a user, I want to be able to easily navigate through the website.
### Site owner Goals
* Help other struggling gamers.
* Show to new players how the game looks like.
* Show to new players where they can start their adventure with the game.
#### Requirements
* Easy to navigate on various screen sizes.
* Visually inviting 
* Helpful information
#### Expectations
* I expect all navigation links to work correctly.
* I expect all information to be correct and accurate.
* I expect all images in gallery to be opened in a new tab.
* I expect all links to social media sites to be opened in a new tab.
### Design Choices
#### Font
[Open Sans](https://fonts.google.com/specimen/Open+Sans) is a clean and modern font that's perfect for any website. It's easy to read on screens of all sizes, making it ideal for web and mobile use.
#### Icons
Icons make text on webpages easier to understand. I use [Font Awesome](https://fontawesome.com) icons because they're easy to use and look great.
#### Colours
On my website I used darker colors. Mainly we will see shades of purple and blue. The background of the page is an image and it is a starry sky.
* #0b060e - This colour will be used as a backgroung behind navigation bar and footer.
* #47476b - This colour will be used as a backgroung behind download buttons.
* rgb(136 12 136 / 35%) - This colour will be used as a images shadow.
* #ffffff - This colour will be used as a text colour.
#### Structure
The site will work on small and large screens. On small screens, we will see a menu button in the navigation bar. Everything else will scale accordingly.
### Features
#### Navigation Bar
The navigation bar is fully responsive to allow for various screen sizes. It includes links to manover around the site easily.
#### Main Section 
The image is to show the user that this is a player zone. The text in the image tells you what the page is about. You will also find a brief description of the game.
#### Tips and Tricks Section
Here you will find a list of tips that will help you improve your gaming. This is the main section of the site. The tips are for new and experienced players
#### Gallery Section
Images can be displayed in a new tab by clicking on them.
#### Download Section
A new player can use this section to check what the game requires. Additionally, there are two ways to download the game.
#### Find Me Section
Located at the bottom of the page you will find several icons linking out to social media 
### Tehnologies used
#### Languages 
* HTML
* CSS
* JavaScript
#### libraries
* Font Awesome
* Google Fonts
#### Tools
* Gitpod
* Github
* W3C HTML Validation Service 
* W3C CSS Validation Service
* Wave webaim
### Testing
#### Html Validator
* I had no major problems with the html. At first I had a warning that the style.css link does not require type="text/css". I quickly fixed it by removing redundant text. I had some missing things like p element in li tips and tricks section. With the help of a mentor, I was directed what I might be missing. As soon as I noticed it, I quickly fixed it by adding a p element to the text. Pictures from the gallery were outside the gallery section. As soon as I noticed the error, I moved the photos to the appropriate place.
HTML validation results
![Html](/assets/img/htmlgood.png)
#### Css Validator
* With css it wasn't so easy anymore. The biggest problem I had with responsiveness. As soon as I tried to launch the page on a small screen, my hero image was cut off on the right side. It took me a long time to get everything working properly. The method I used to find the error was to remove elements from html one by one in devtools chrome. As soon as I found a bug, I styled it appropriately. Media Queries were very helpful here. The site should now work even on very small screens. After testing, I found 1 error and 1 warning. I got rid of redundant word-break in recommended section and changed word-break to word-wrap in hero text class.
![result](/assets/img/csserror.png)
* The code was a bit messy. I added comments and tidied up the free spaces between the properties. After running the test again, I did not encounter any errors.
![result](/assets/img/cssnoerror.png)
#### Wave webaim
* I also did an accessibility evaluation. There is one error about empty link. This is the menu button. I don't want to be sent elsewhere, just expand the bar. Therefore, the error must remain. Everything else looks promising. No alerts. 
![result](/assets/img/wavegood.png)

### Deployment  
After the initial code had been committed and pushed to GitHub, it was time to deploy the project. This project was deployed using GitHub by the following steps.
* Navigate to the repository on github and click **Settings**.
* Select **Pages** on the side navigation.
* Select the **None** dropdown, and then click **Main**.
* Click on the **Save** button.
* Now the website is now live on https://emcion.github.io/project-1/
### Credits 
#### For help, advice and insperation
* [Simen Daehlin](https://github.com/Eventyret)
#### For insperation and content.
* [Sam Timmins](https://github.com/sam-timmins)
* [Call of Duty: Warzone 2.0](https://www.callofduty.com/warzone)