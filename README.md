# ASP.NET Core & Vue.js Starter

This is a fork of the template made by TrilonIO, please read through this as this forked project has deviated completely to support and add different direction.

Differences:
Upgraded to ASP Core 3.1 (was 2.2)
Added Vue CLI, which abstracts away many of the plumbing that the previous project did with webpack 4
Added SPA integrations - please read the section "Notes" for more info
Split the project into Web and Data (Web API) - Was all part of the same applicatoin

---

Starter Template for ASP.NET Core and Vue.JS (Vue) - with Webpack (with HMR), Web API, Vuex state manangement and other best-practices baked in! 

> Written in ES.

[![Nuget](https://img.shields.io/nuget/v/aspnetcore-vuejs.svg?style=for-the-badge&color=5b1096)](https://www.nuget.org/packages/aspnetcore-vuejs/)
[![Nuget Downloads](https://img.shields.io/nuget/dt/aspnetcore-vuejs.svg?label=Nuget%20Downloads&style=for-the-badge&color=b31ae7)](https://www.nuget.org/packages/aspnetcore-vuejs/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&color=e51384)](/LICENSE) 

---

<br>
<p align="center">
  <a href="https://trilon.io" target="_blank">
        <img width="500" height="auto" src="https://trilon.io/trilon-logo-clear.png" alt="Trilon.io - Angular Universal, NestJS, JavaScript Application Consulting Development and Training">
  </a>
</p>


<h3 align="center"> Made with :heart: by <a href="https://trilon.io">Trilon.io</a></h3>

---


# Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Extras](#recommended-plugin-for-debugging-vuejs)
* [License](#license)
* [Trilon - VueJS & Asp.NET Consulting & Training](#trilon---vue-aspnet-nodejs---consulting--training--development)

# Features

- **ASP.NET Core 3.1**
  - Web API
- **VueJS 2**
  - Vuex (State Store)
- **Vue CLI**
  - HMR (Hot Module Replacement/Reloading)
- **Bootstrap 4**

# Prerequisites:
 * [.Net Core 3.1](https://www.microsoft.com/net/download/windows)
 * [NodeJS](https://nodejs.org/) >= 10.x
 * [VSCode](https://code.visualstudio.com/) (ideally), or VS2019

# Installation:

Clone this Repo itself

 * Clone this repository : `$ git clone https://github.com/sksallaj82/aspnetcore-Vue-starter.git VueWeb`
 * `$ cd VueWeb/content`
 * `$ dotnet restore && npm install`
 * (If using VSCode) `$ code .` 
 * (If using Visual Studio) Open the `*.sln` file with "Open project" from Visual Studio IDE


## Start the application:
This is manual for now. Navigate to content\Web\ClientApp and double click the file "install-website.bat" and wait for everything to be completed.
 
### 1. Using the built-in run command
Right click the solution and click "Set Startup Projects" and make sure you select "Multiple Start up Projects" for both Data and Web.
Run the application in VSCode or Visual Studio 2019 by hitting `F5`.

## View your application running
When running the app using debug menu or `F5` VS open auto the app in the browser;

## Notes ##

This project has 5 possible environments set up as follows:

* _ : local environment
    * Using this will look at the static files found in ClientApp/public, in this mode you have Hot reload since it spins up a seperate server on port 8080. In this mode, none of the MVC controllers on the Web project are being used. Use this mode for developing the web interface's look and feel.
* _d : local dev environment
    * Before you switch to this environment, run "npm run build:_d" in ClientApp/src. Use this for integrating systems on the local machine, like authentication for example.
developement : dev environment shared
    * Before you switch to this environment, run "npm run build:dev" in ClientApp/src. Use this for integrating systems on the dev machine, where you can have multiple developers, and other users testing the system.
* staging : staging environment shared
    * Before you switch to this environment, run "npm run build:staging" in ClientApp/src. Use this for integrating systems on the staging machine, where you test the application on a machine that looks as close to production ready as possible
* prod : production environment shared
    * Before you switch to this environment, run "npm run build:staging" in ClientApp/src. Use this for integrating systems on the production machine.
    
It is recommended to use the follow modes for the environements:
* Debug mode for _ and _d
* Release mode for development, staging, production

When you run "npm run build:<env>", this builds the files into wwwroot/dist, and the project will make use of the files located there as its injected into an MVC view (cshtml). These types of builds are needed since MVC controllers would be enabled and used. It's only for _d, dev, staging, and prod only. The _ environment doesn't look at wwwroot/dist, it's a special local case.
  
This is meant to be flexibile, if you ever want to change the way these environments are set up, this is hooked in the following files:
* Web/ClientApp/src/package.json
    * This holds all the scripts definition
* Web/ClientApp/src/vue.config.js
    * This looks at environments to configure environment paths
* Web/ClientApp/src/env.*
    * This is Vue Cli's way of picking environments, you can read more about it here: [Vue Cli - Mode and Env](https://cli.vuejs.org/guide/mode-and-env.html)
* Web/Properties/launchSettings.json OR Data/Properties/launchSettings.json
    * We use these specific profiles on VS Studio 2019, to switch environments via IDE. You'd unfortunately also have to manually run "npm run build _d" in ClientApp/src file, if you want to test the _d environemt
* Web/Startup.cs OR Data/Startup.cs
    * This is where we separate between looking at the static SPA files versus injecting them into an MVC view. The application is made to be flexible to allow you to decide whether you want to use MVC and SPA together. The only mode that neglects MVC controllers and views is the _ environment, and only enables the SPA application.
    
The only time the website ever fetches data from the application is when you click "Data" on the website. If this doesn't work, make sure Data project has started with the Web project.

# Recommended plugin for debugging VueJS

- Get Chrome DevTools for VueJS [here](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

---

# Found a Bug? Want to Contribute?

Nothing's ever perfect, but please let me know by creating an issue (make sure there isn't an existing one about it already), and we'll try and work out a fix for it! If you have any good ideas, or want to contribute, feel free to either make an Issue with the Proposal, or just make a PR from your Fork.
Please note that this project is released with a [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

---

_Looking for ASP.NET Core & Angular 7.x+ Universal starter? [click here](https://github.com/TrilonIO/aspnetcore-angular-universal)_

----

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&color=e51384)](/LICENSE) 

Copyright (c) 2020 [Sultan Sallaj](https://github.com/sksallaj82)

----

# Trilon - Vue, Asp.NET, NodeJS - Consulting | Training | Development

Check out **[Trilon.io](https://Trilon.io)** for more info! 

Contact us at <hello@trilon.io>, and let's talk about your projects needs.

<p align="center">
  <a href="https://trilon.io" target="_blank">
    <img src="https://trilon.io/trilon-logo-clear.png" alt="Trilon.io - Angular Universal, NestJS, JavaScript Application Consulting Development and Training">
  </a>
</p>

## Follow Trilon online:

Twitter: [@Trilon_io](http://twitter.com/Trilon_io)
