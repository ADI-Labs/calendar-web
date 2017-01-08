Front-end for [Calendar](https://github.com/ADI-Labs/calendar)
[![Stories in Ready](https://badge.waffle.io/ADI-Labs/calendar-web.png?label=ready&title=Ready)](https://waffle.io/ADI-Labs/calendar-web)
[![Build Status](https://travis-ci.org/ADI-Labs/calendar-web.svg?branch=master)](https://travis-ci.org/ADI-Labs/calendar-web)

### Core Technology

 - ECMAScript 2015 (ES6) syntax
 - [React.js](https://facebook.github.io/react)
 - [Redux](https://redux.js.org)

### Setup

Install node. NPM will come prepackaged. Install the npm packages.

```bash
$ npm install
```

### Development

Ensure that the [backend server](https://github.com/ADI-Labs/calendar) is running. Run the `start` script.

```bash
$ npm start
```

This starts the developmental server.

### Structure
```
├──	app/							--	Isomorphic code.
│	├──	assets/
│	│	├──	css/
│	│	│	└──	...
│	│	├──	images/
│	│	│	└──	...
│	│	├──	styles/
│	│	│	└──	...
│	│	├──	template.dev.ejs
│	│	├──	template.prod.ejs
│	│	└──	...
│	├──	components/					--	Presentational react components
│	│	└──	...
│	├──	containers/					--	Redux-connected containers
│	│	└──	...
│	├──	modules/					--	Redux modules: reducers and actions
│	│	└──	...
│	├──	pages/						--	Top-level routes
│	│	└──	...
│	├──	store/						--	Redux state-management
│	│	├──	configureStore.dev.js
│	│	├──	configureStore.js
│	│	├──	configureStore.prod.js
│	│	└──	reduxify.js
│	├──	toolbox/					--	Assorted utilities (functions)
│	│	└──	...
│	└──	index.js
│
├──	client/							--	Client-side (webpack)
│	├──	render/
│	│	├──	index.js
│	│	├──	render.dev.js
│	│	└──	render.prod.js
│	└──	index.js
│
├──	compiler/						--	Webpack compiler
│	├──	index.js
│	├──	webpack.config.dev.js
│	└──	webpack.config.prod.js
│
├──	Server/							--	Server-side (Node)
│	├──	index.js
│	├──	server.dev.js
│	├──	server.prod.js
│	└──	...
│
├──	test/							--	Tests
│	├──	.../
│	├──	helpers/
│	└──	.../
│
├──	...
│
├──	register.js						--	Configures and polyfills node environment.
│
└──	...
```
