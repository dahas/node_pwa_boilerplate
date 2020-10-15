## NodeJS Webserver Boilerplate

This boilerplate for NodeJS makes it easy to start a new WebApp from scratch. It includes jQuery and Bootstrap.

### Requirements

Clone the resources into an empty folder:
```
$ mkdir your_project_folder
$ cd your_project_folder
$ git clone https://github.com/dahas/node_webserver_boilerplate.git .
```

Install Node monitor globally:

```
$ npm i -g nodemon
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

Run this command when you start working on your project (enables SASS watcher):

```
$ npm run dev
```

Run this command to simply start serving:

```
$ npm start
```

To launch your project in the web browser enter:
**http://localhost:8000**