
# Another Ionic 3 & Angular 5 Boilerplate

[![Build Status](https://travis-ci.org/Asone/ionic-3_Angular-5-Boilerplate.svg?branch=master)](https://travis-ci.org/Asone/ionic-3_Angular-5-Boilerplate) [![](https://circleci.com/gh/Asone/ionic-3_Angular-5-Boilerplate.png?circle-token=:circle-toke)](https://circleci.com/gh/Asone/ionic-3_Angular-5-Boilerplate)

The following repo provides a boilerplate for projects intended to be written with Ionic 3 & Angular 5. 

As there are many boilerplates for Ionic 3 and Angular 5 most of those didn't fit to my workflow as many bring little architecture and contextualization. 

Building a professional app is a complex workflow in which developpers often interact with poly-environments parameters, dependencies management, tests and documentation. 

The repo intends to fullfill the most common expectations found in the workflows to create a clone&go boilerplate as up-to-date as possible.


# Install

## Install without Docker : 

You need to install `node` first in order to be able to download the following dependencies : 

#### Install Ionic : `npm i -g Ionic`
#### Install Karma : `npm i karma --save-dev`
#### Install Angular-cli : `npm -g angular-cli`
#### Install dependencies : `npm install`
#### Generate documentation : `npm run doc`
#### Perform unit tests : `npm test`
#### Perform end-to-end tests :`npm e2e`

## Install with Docker : 

Make sure you've installed docker first

`docker-compose build . && docker-compose up front -d`

It will run a `ionic serve` instruction on port 8100.

# Structure

Even if there is no perfect folder structure, some recommandations exist about how to structure your project. 

The repo brings the described structures and coding conventions, trying to stick as much as possible to the official recommendations.

## Root Structure

Root level is described as following : 

```
- src/				=> Sources of the application
- test-config/        		=> Config files for environments handling
-  package.json			=> Configure dependencies and npm run scripts
- tsconfig.json			=> TypeScript configuration
- ionic.config.json		=> Ionic configuration
- config.xml			=> Application configuration
- environments/			=> Environment configuration
- config/ 			=> Config folder containing main webpack configuration
- Test/ 			=> Config for environments handling
```

## Application Structure 

### Global Structure
Global structure is the following : 

```
- _Components				=> Components for Angular
- _Models				=> Custom types and interfaces 
- _TestData				=> Mocked data for tests & development
- _Services				=> Injectable classes for services like API requests
- _Pages				=> Pages containers for Ionic

```

### Angular Classes & Components

Following good practices, the structure of an Angular component should be as follows : 

```
- MyComponent
	- MyComponent.component.ts			=> Component Class
	- MyComponent.component.spec.ts			=> Unit tests
	- MyComponent.component.e2e.ts			=> end-to-end tests
	- MyComponent.component.scss			=> SASS/CSS styles
	- MyComponent.component.html			=> HTML Template
```

### Ionic pages Classes

Ionic pages classes should follow the same convention, however we will put here an additional file declaring an [`ngModule`](https://angular.io/api/core/NgModule)  for page which will provide Ionic Modules & scoped Angular components.

```
- MyPage
	- MyPage.page.ts				=> Component Class
	- MyComponent.page.spec.ts			=> Unit tests
	- MyComponent.page.e2e.ts			=> end-to-end tests
	- MyComponent.page.scss				=> SASS/CSS styles
	- MyComponent.page.html				=> HTML Template
	- MyComponent.page.module.ts	        	=> Page Module
```

# Dependencies

## Frameworks

### Core :

| Dependency | Description | Version | Documentation |
|----------------|-------------------------------|-----------------------------|------|
|Ionic| Javascript Hybrid Application development framework |v.3.20.2 | [Documentation](https://ionicframework.com/docs/) |
|Angular| SPA Framework for webapp development | @angular/core : v.5.2.9 <br /> angular-cli : v.1.2.3 | [Documentation](https://angular.io/docs) |
Cordova |mobile application development framework | v8.0.0 | [Documentation](https://cordova.apache.org/docs/) |
| Typescript |  JavaScript super-set for strong-typing code | v2.4.2 | [Documentation](http://www.typescriptlang.org/docs/) |
|Karma |Unit testing| Karma : v.2.0.0 <br /> karma-webpack : v.^3.0.0 | [Documentation](https://karma-runner.github.io/) |
| Jasmine | Behavior-driven development framework | v.^2.8.6 | [Documentation](https://jasmine.github.io/pages/docs_home.html) |
| Istanbul | test coverage reporting. Compatible reports for Jenkins. Package name : istanbul-instrumenter-loader | v.^3.0.1 | [Documentation](https://github.com/gotwarlost/istanbul) |
| Webpack | Bundle handler | v.3.8.1 | [Documentation](https://webpack.js.org/guides/) |

### Cordova plugins :

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  Deeplinks | URI navigation & Universal links | v.^1.0.15  
|  Network   | Device network access | 

### Ionic dependencies : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  IonicStorageModule  | Device storage | v.3.20.0  |
| Network | Network access module |


### Angular Dependencies : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  @angular/animations <br />@angular/common <br /> @angular/compiler  <br />@angular/compiler-cli: ^5.2.9 <br />@angular/core  <br /> @angular/forms  <br /> @angular/http <br /> @angular/platform-browser <br /> @angular/platform-browser-dynamic  | Core modules| v.5.2.9
| @angular/animations| animations for components | v.5.2.9

### Webpack plugins : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  angular2-template-loader  | Core modules| v.5.2.9 |
| 	html-loader			| 		bundles html files		| 
| @angular/animations| animations for components | v.5.2.9


### Karma plugins 

| Dependency package |  Description| Version |
|-|-|-|
|karma-chrome-launcher| loads karma in chrome | |
|karma-firefox-launcher| loads karma in firefox | |
|karma-jasmine | behavior driven framework | |
|karma-jasmine-html-reporter|  pretty ui for jasmine

## Angular Modules

TODO

## Ionic Modules

TODO


# Included features

## Environment handling

**Environment variables for build configuration.** 
Useful for handling different environment dependencies likes IPs or network URIs.   

## Travis Continuous integration ready

This repo comes with a functionnal travis configuration. When committing your work travis will try the following build :
- Cordova configuration
- Build creation for the ionic app
- Running unit tests

## Circle CI integration ready

Like Travis CI use, this repo provides also a **Circle CI configuration**. It will run a similar build as the one you can find for Travis.

## Storage service

**Angular service for accessing application storage.** 
Useful for data caching, user auto-authentication and user parameters settings.

## Network heart & pulse

**Angular service for network state.** 
This service can be used to dispatch connectivity behaviors. Some other applications for service are request buffering and cache management.

Note that connectivity state is boolean.

## Auto resume auth 

Main App module has a built-in method to **load a session**.  If a `session` key is found in storage, App module will check for connectivity and execute a  `resume` from access authentication API class if `connected`.

useful for authentication based behaviours developments.

## Good practices & conventions 

- [Angular good practices](https://angular.io/guide/styleguide)
- [TypeScript good practices](https://definitelytyped.org/guides/best-practices.html)


# Licence

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.