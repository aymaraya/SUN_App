# SUN App
[SUN App Logo](./assets/appicon.png)
Cross-platform App for Skyline University Nigeria
## Table of contents
* [General info](#general-info)
* [Setup](#setup)
* [Project Structure](#project-structure)

## General Info

SUN App is developed using [Expo](https://github.com/expo/expo). This repository contains the source code and resources for the SUN App.

Your environment needs to be set up for the particular platforms that you want to run tests on. Check [this guide](https://docs.expo.io/get-started/installation/) for Expo Installation guide. [Node.js LTS release](https://nodejs.org/en/) or greater, [git](https://git-scm.com/) and [watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS users.

### Technologies used and their versions:

* React-native: 37.0.1
* Expo: 37.0.0 
* React-navigation: V5
* Axios: 0.21.1
* Native-base: 2.15.2
* Redux: 4.0.5
* Redux-thunk: 2.3.0


## Setup

To run this project, clone this repository and:

```
$ cd ../SUN_App
$ npm install
$ npm start
```

The fastest way to get up and running is to use the Expo Go app on your iOS or Android device. Expo Go allows you to open up apps that are being served through Expo CLI. Follow this [guide](https://docs.expo.io/get-started/installation/#2-expo-go-app-for-ios-and) to setup Expo Go.

You can also run the app directly on your computer. you can learn more about [installing the iOS Simulator (macOS only)](https://docs.expo.io/workflow/ios-simulator/) and [installing an Android emulator](https://docs.expo.io/workflow/android-studio-emulator/).


## Project Structure

* assets folder: All the images and fonts used in this project will be found in this folder
* src folder: This is where you can find components, screens, navigation, redux actions and context.
* node_modules folder (After npm install): This folder contains all of the different dependencies and packages that we need in this project for it to work so if you install any third-party packages in the future. Those are going to be installed into this node modules folder.
* index.js file: is the root component of our app and currently deals with loading fonts and redux wrap.
* App.js file: is the actual file that wrap Visitor's screen and Student's screen navigation.
* app.json file: this root component contains information about the project, its name, its supported platforms, icon and splash images.
* package.json file: is used to track our different dependencies of the project and also some scripts as well so just extra information about the project.