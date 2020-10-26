## NodeJS WebApp Boilerplate

With this boilerplate you can create a NodeJS WebApp that is based upon the Express framework and the EJS template engine. On the client side you have to deal with jQuery and Bootstrap. If you like to write your scripts with the modern ECMAScript syntax, feel free to do so. CSS pre-processing is accomplished using a SASS compiler. And a set of free icons is provided by Font Awesome.

### Requirements

Clone the resources into an empty folder:
```
$ mkdir your_project_folder
$ cd your_project_folder
$ git clone https://github.com/dahas/node_webserver_boilerplate.git .
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

Run this command when you start working on your project (enables SASS watcher and Babel transpiler):

```
$ npm run dev
```

Run this command to simply start serving:

```
$ npm start
```

To launch your project in the web browser enter:
**http://localhost:8000**

### Create your own app

##### HTML

You find the HTML files in the "views" folder. If you like to break your layout into pieces, put those pieces in the "partials" subfolder. Markers and partials are parsed with the EJS template engine.

##### CSS

Check out the "sass" folder and the scss files named with "_custom". Put your custom styles into these files.

##### JS

The main Javascript file is within the "src" folder. You can write your code and import modules using the ES6 syntax.

##### Routing

Routes are configured in app.js using the express framework.