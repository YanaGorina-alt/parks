National Parks App
This is a web application built with HTML, CSS, and JavaScript using the React library. The app is designed to let users explore all the amazing national parks in the United States. It uses the National Park Service (NPS) API to retrieve information about the parks, including their names and park codes.

Approach
The app was developed using a single React page and React Router to manage routing between different views. The Fetch and UseEffect hooks were used to make requests to the NPS API and retrieve data, which was then stored in the app's state. The app features a search bar that allows users to search for parks by name, and each park's details can be accessed by clicking on its name.

Live Site
The app is hosted on Netlify and can be accessed by clicking on the following link:
#[Netlify Live Link](https://nationalparksexploration.netlify.app/) 

Installation
To run the app locally, follow these steps:

Obtain your API key from: #[NPS API Link](https://www.nps.gov/subjects/developer/get-started.htm)
Clone the repository to your local machine
make a .env file in your project folder (same directory as the .gitignore file)
in the .env declare a variable named REACT_APP_API and assign the value of your API key (REACT_APP_API=YOUR_API_KEY), with no space, no quotes, and no semicolon at the end.
Install the required dependencies by running npm install
Start the development server by running npm start
Technologies Used
HTML
CSS
JavaScript
React


Acknowledgements
This app was created as part of a coding challenge and was inspired by the National Park Service's mission to "preserve unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations."



