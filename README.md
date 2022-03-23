# AdultLife-FullStack-App

This application is built using Firebase Cloud functions on the backend and Vanilla JS on the Frontend.

Before running this code you want to first of all change the transporters gmail and password, so go on into to functions folder and open index.js, o line 12 and 13 change the details their as such:

```

user = "your gmail address";
pass = "your gmail password";

To run this app in a development environment, open your console and change directory to the functions directory:

```

cd AdultLife-FullStack-App/functions

```

after doing the above you can now run the developement server by running `firebase serve`. this would start the development server and provide an API propbably hosted on *localhost:5000*

With this you can now go into the frontend folder and run index.js
