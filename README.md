## Welcome Screen Interface Frontend Documentation

### Overview
The codebase in question is for a frontend interface designed to display a welcome screen that can host various demos in different formats (videos, web apps, or desktop apps). The welcome screen content and the addresses of the demos are fetched from the Content Management System (CMS). The url for the CMS in defined in `app.js`

### Code Organization
#### Directory Structure
The directory structure includes the following key files and their purposes:

- **style.css**: Defines the styles and themes applied across the frontend interface.
- **index.html**: The entry point of the interface, containing structure and references to external scripts.
- **server.py**: A simple Python server script that serves the frontend and handles routing based on demo IDs.
- **languages.js**: Handles the language selection functionalities.
- **home.js**: Responsible for loading and displaying the home page content.
- **demo.js**: Manages the loading and display of demos.
- **app.js**: Contains the application's logic, including navigation and communication with the CMS.
- **learnMore.js**: Handles the display of detailed information about the demos.


#### Assets
The `/assets` directory is intended for storing static resources like fonts used in the frontend interface. It is further organized into subdirectories such as `/fonts`, which might contain custom font files.

### Functionality and Methods
Each JavaScript file includes functionality relevant to its purpose. These files define functions with the following responsibilities:

#### server.py
- **MyHandler**: A subclass of `http.server.SimpleHTTPRequestHandler` with a custom `do_GET` method that routes the request to the correct HTML page based on the URL's path.

#### languages.js
- **loadLanguages**: Returns the HTML content for the language selection page.
- **setSelectedLanguage**: Sets a global variable for the selected language.

#### home.js
- **loadHome**: Asynchronously loads the home page content with details from the CMS.

#### demo.js
- **loadDemo**: Asynchronously loads the appropriate demo content, depending on its type (website, video, or app).

#### app.js
- **loadDemoFromStrapi**: Fetches demo content from the CMS and populates global `demoContent`.
- **setLanguage**: Sets a language preference for the interface.
- **navigate**: Switches the displayed content based on page navigation, updating the `contentDiv` accordingly.

#### learnMore.js
- **loadLearnMore**: Asynchronously loads additional information about the demos.

### Code Examples and Usage
For example, to route the user to a specific demo, the `navigate('demo')` function is called which in turn triggers the `loadDemo` function to display the demo content.

### Dependencies and External Libraries
- **http.server**: A simple HTTP server provided by Python's standard library, used in `server.py`.
- **Phosphor icons**: An icon library included in `index.html`, providing icons for parts of the UI.
- CSS and JavaScript are local to the codebase.

### Environment and Setup
#### Requirements
- Python for running `server.py`.
- Web browser for viewing the frontend.
- Internet connection for fetching demo content from the CMS.

#### Server Setup
1. Ensure Python is installed on your machine.
2. Run `server.py` in the root directory to start the simple HTTP server:
    ```sh
    python server.py
    ```
3. The server will be available at `http://localhost:8080/`.

#### Launching a Demo
To launch a demo:
1. Once the server is running, open a web browser.
2. Navigate to `http://localhost:8080/$DEMO_ID` where `$DEMO_ID` is replaced by the ID of the demo you wish to view.
