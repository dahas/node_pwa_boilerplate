## NodeJS PWA Boilerplate

This boilerplate might be of ones interest who is not in the mood to dive deeper into Angular, Vue, React, Ember a.s.o., and just want to get started with ECMAScript, Vanilla JavaScript or jQuery as he or she is used to it.

With this boilerplate you can create a Progressive Web App (PWA) that is based upon NodeJS and the Express framework. On the client side you have to deal with jQuery and Bootstrap, which of course you can change. CSS pre-processing is accomplished using a SASS compiler. And a set of free icons is provided by Font Awesome.

### Requirements

Clone the resources into an empty folder:
```
$ mkdir your_project_folder
$ cd your_project_folder
$ git clone https://github.com/dahas/node_pwa_boilerplate.git .
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

Before you deploy your stuff to a hosting provider run the following command. It compresses your JavaScript code and creates/updates the ServiceWorker:

```
$ npm run build
```

To simply start serving, run this:

```
$ npm start
```

Enter the following URL in the web browser to launch your project:  
**http://localhost:8000**

<hr>

### Create your own app  

##### HTML

Put all HTML files directly into the **public** folder. Do not use subfolders.

##### CSS

Check out the **sass** folder and the scss files named with "_custom". Put your custom styles into these files.

##### JS

The main Javascript file is within the **src** folder. You write your code there and import modules using the ES6 syntax.

##### Routing

Routes are configured in `app.js` using the express framework. 

##### Manifest

In `manifest.json` you set the name of your app.

<hr>

### Create icons

Visit [realfavicongenerator.net](https://realfavicongenerator.net). Follow the instructions and replace the related images in the public folder with those from the zip file. Ignore the included manifest.

### Use another CSS framework

Instead of bootstrap you can install any other css framework that you prefer. If the other framework supports scss as well open styles.scss which you find in the "sass" folder. Replace the 2nd line in the Bootstrap section so it points to the main scss file of the new library. Also remove bootstrap from register.js in "src" folder.

### Offline first

The nice thing about a PWA is that you can use it offline like a native app on a mobile device or on the desktop. But to achieve this behaviour you have to cache all the files you need in a special way. You can do this with a so-called ServiceWorker. For the caching strategy of our ServiceWorker we use a tool called "Workbox". 

Since caching can be annoying during the development it should be implemented shortly before the deploy at the earliest. Therefore the ServiceWorker is disabled by default. You have to activate it manually. For this set `enableServiceWorker = true;` in "src/register.js". Then run the following command to generate the public ServiceWorker (public/sw.js) with the precache manifest:

```
$ workbox injectManifest workbox-config.js
```

Open the "Application" tab in the developer tools of your browser. There you can check whether the ServiceWorker is running correctly. When you simulate the offline behaviour it can be that some missing resources are displayed in the console. Add those missing resources manually in the `routes` array in the ServiceWorker template (sw-template.js).

IMPORTANT: Whenever you add, remove or modify files of your app, or if you have modified the ServiceWorker template, you have to update the public ServiceWorker. The update is applied automatically when you execute `$ npm run build`. Otherwise you have to run `$ workbox injectManifest workbox-config.js` again before the deploy.