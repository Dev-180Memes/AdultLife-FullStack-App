# AdultLife-FullStack-App

This application is built using Firebase Cloud functions for making reports, and NodeJS for the Chat App on the backend and Vanilla JS on the Frontend.

## Firebase Functions

Before running this code you want to first of all change the transporters gmail and password, so go on into to functions folder and open index.js, o line 12 and 13 change the details their as such:

```

user = "your gmail address";
pass = "your gmail password";

```
To run this app in a development environment, open your console and change directory to the functions directory and install all dependencies:

```

cd AdultLife-FullStack-App/functions && npm install

```

after doing the above you can now run the developement server by running `firebase serve`. this would start the development server and provide an API propbably hosted on *localhost:5000*

With this you can now go into the frontend folder and run index.html

## NodeJS Server

To start the NodeJS server in the you would need to open another command line and change directory to the project directory. After moving into the project directory you should install all dependencies used in the project.

```

cd AdultLife-FullStack-App && npm install

```

To start the development server all you need to do is run `npm run dev` on your command line which would start the development server on `localhost:4000`.

To start the frontend go to the frontend folder and open `index.html` in a browser this would start the frontend then you can navigate from their.
