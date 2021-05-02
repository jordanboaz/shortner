# Shortner 

Responsive application to shorten urls integrate with the [shrtcode API](https://app.shrtco.de/docs) 

Main Functionalities: 
  
  1. Shorten a link
  2. See a list of their shortened links, even after refreshing the browser
  3. Copy the shortened link to their clipboard in a single click 
  4. Optimal layout for the site depending on their device's screen size

## Demo
Check out a live demo on this [link]().
  
## Tech used

### React
  -React was used on version `17.0.2`

### TypeScript

- The app is build using [Typescript](https://www.typescriptlang.org/), it grants bring static typing for javascript, granting us the ability to use the intelisense for our code editor, facilitates the refactoring of code, saves us debuging time and brings more assertiveness when accessing properties of our variables.
- Interfaces were created with payload responsed from the API, so the whole application is aware of it's data structure.

### NextJS
- NextJS is a framework built on top of React that is fast and efficient.

### Main libs:

- [axios](https://github.com/axios/axios) for api access.
- [styled-components](https://styled-components.com/) to simplify separation between code and stylesheets.
- [jest](https:/jestjs.io/) as a test runner. 
  
### Code quality

To ensure the code follow the some pattern and is correctly typed, some libs were used:

- [prettier](https://prettier.io/) for code formatting.


#### Componentization of reusable code

UI components, like headers, footers, lists were created to avoid code duplication. The components were create to be completely reusable and they do not contain any business logic.

#### Separation of concerns

- For this simple application, we use ContextAPI. It provides us a way to create a separation between UI components and business logic and state.


## Screenshots
#### Desktop Screens
   
<img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/desktop1.png" height="600px" width="1080px" /><img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/desktop2.png" height="600px" width="1080px" />
<img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/desktop3.png" height="600px" width="1080px" /><img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/desktop4.png" height="600px" width="1080px" />

#### Mobile Screens
<img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/mobile1.png" height="600px" width="340px" />    <img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/mobile2.png" height="600px" width="340px" />


<img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/mobile3.png" height="600px" width="340px" />    <img src="https://github.com/jordanboaz/shortner/blob/main/public/screenshots/mobile4.png" height="600px" width="340px" />


## Run the project

```
yarn && yarn dev
```
