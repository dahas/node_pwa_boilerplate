## NodeJS WebApp Boilerplate

This boilerplate might be of ones interest who is not in the mood to dive deeper into Angular, Vue, React, Ember a.s.o., and just want to get started with ECMAScript or with native JavaScript as they know it.

With this boilerplate you can create a NodeJS WebApp that is based upon the Express framework and the EJS template engine. On the client side you have to deal with jQuery and Bootstrap, which of course you can change. CSS pre-processing is accomplished using a SASS compiler. And a set of free icons is provided by Font Awesome.

### Requirements

Clone the resources into an empty folder:
```
$ mkdir your_project_folder
$ cd your_project_folder
$ git clone https://github.com/dahas/node_webapp_boilerplate.git .
```

Install SASS support globally:

```
$ npm i -g node-sass
```

Install the dependent libraries:
```
$ npm i
```

### Usage

Run this command when you start working on your project. It enables the SASS watcher and the Babel transpiler:

```
$ npm run dev
```

Before you deploy your stuff to a hosting provider run the following command. It compresses your JavaScript:

```
$ npm run build
```

To simply start serving, run this:

```
$ npm start
```

Enter the following URL in the web browser to launch your project:
**http://localhost:8000**

### Create your own app

##### HTML

You find the HTML files in the "views" folder. Don´t let the file extension "ejs" confuse you. If you like to break your layout into pieces, put those pieces in the "partials" subfolder. Markers and partials are parsed with the EJS template engine.

##### CSS

Check out the "sass" folder and the scss files named with "_custom". Put your custom styles into these files.

##### JS

The main Javascript file is within the "src" folder. You can write your code and import modules using the ES6 syntax.

##### Routing

Routes are configured in app.js using the express framework.

### Use another CSS framework

Instead of bootstrap you can install any other css framework that you prefer. If the other framework supports scss as well open styles.scss which you find in the "sass" folder. Replace the 2nd line in the Bootstrap section so it points to the main scss file of the new library. 