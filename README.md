JavaScript Library Documentation
This repository contains a collection of JavaScript modules designed for building interactive web applications. Below is the detailed documentation for each module.

Table of Contents
NavBarBuilder.js
Main.js
FormModel.js
FormMain.js
AnimationController.js
Controller.js
StorageManager.js
Utility.js
MyCustomElement.js
PageManager.js
NavBarBuilder.js
Overview
NavBarBuilder.js is a module for creating dynamic navigation bars in web applications.

Features
Dynamically creates navigation items.
Configurable for various routes and links.
Event listeners for navigation actions.
Usage
To use this module, import it into your main JavaScript file and initialize it:

javascript
Copy code
import NavBarBuilder from './NavBarBuilder.js';

const navBarBuilder = new NavBarBuilder();
navBarBuilder.initializeApp();
Main.js
Overview
Main.js serves as the entry point for the web application, initializing different controllers and setting up event listeners.

Features
Initializes the AnimationController.
Sets up event listeners for UI interactions.
Initialization
The module binds the necessary event listeners on DOMContentLoaded:

javascript
Copy code
document.addEventListener('DOMContentLoaded', () => {
    // Code to initialize the application
});
FormModel.js
Overview
FormModel.js is responsible for creating and managing forms dynamically.

Features
Allows dynamic creation of form fields.
Handles form submission and data storage.
Methods
addField(type, attributes): Adds a new field to the form.
renderForm(): Renders the form in the specified container.
FormMain.js
Overview
FormMain.js acts as a wrapper around FormModel.js, providing higher-level functions.

Features
Simplifies the process of form creation and management.
Checks and prevents duplicate form renderings.
Usage
Initialize the form in your application like this:

javascript
Copy code
const formMain = new FormMain();
formMain.initializeForm();
AnimationController.js
Overview
AnimationController.js manages the animations within the application, particularly for custom elements.

Features
Triggers animations on custom elements.
Connects UI events to animation logic.
Controller.js
Overview
Controller.js serves as a central controller for various modules like Utility.js and FormMain.js.

Features
Manages the loading of different HTML templates.
Orchestrates interactions between different components of the application.
StorageManager.js
Overview
StorageManager.js is designed for managing local storage operations in the application.

Features
Handles CRUD operations in local storage.
Provides methods to save, read, update, and delete data.
Initialization
Initialize the StorageManager with a form selector:

javascript
Copy code
const storageManager = new StorageManager('#myForm');
Utility.js
Overview
Utility.js contains utility functions to aid in DOM manipulations and other common tasks.

Features
Simplifies DOM selections.
Assists in creating and managing elements.
Load HTML templates asynchronously.
MyCustomElement.js
Overview
MyCustomElement.js defines a custom HTML element with its own behavior and style.

Features
Custom element with shadow DOM.
Encapsulated styles and behaviors.
Custom Methods
animate(): Triggers specific animations on the custom element.
PageManager.js
Overview
PageManager.js handles the dynamic loading of different pages and the initialization of page-specific scripts.

Features
Manages page transitions without full page reloads.
Dynamically injects content into pages.
Usage
Initialize the PageManager on DOMContentLoaded:

javascript
Copy code
const pageManager = new PageManager();
pageManager.init();
