# Rhubarb Pie

Rhubarb Pie is a modern relaxation, sleep and focus app which features music tailor made for ambient electronic music enthusiasts. While still under active development, Rhubarb Pie features various categories of music carefully composed for specific scenarios and environments such as relaxation on a flight vs relaxation in bed, as well as a number of other scenarios wherein relaxation, sleep, or focus are desired. Rhubarb Pie offers an innovative joystick based user interface which, in an effort to disconnect users from the usual pressures of life, amplifies the perception of separation from everyday experiences by disengaging the typical neural pathways involving mobile phone interaction and engaging users' concentration in an wholly distinct way.

<p align='center'>
<img src='https://rhubarbp.ie/rhubarb_hands_s.png' alt='app mock'>
</p>

**Note: at present there is no sonic content in the library*

## Getting Started

In order to run Rhubarb Pie, users can clone this repository and then run:

### `npm i`

Which installs all of the app's dependencies.

### `ionic serve`

Will run the app locally in your default browser.

### `ionic build`

Builds the app for production to the `build` folder.\
It correctly bundles the app in production mode and optimizes the build for the best performance

### `ionic cap run android`

Serves the app over USB to any mobile Android device configured to run development projects .\

**Note: you must first configure your device within your system using Android SDk*

## Tech Stack

Rhubarb Pie is built using the React frontend framework and bundled using Ionic & Capacitor which deliver platform native functionality for both iOS and Android. Rhubarb Pie's user management is handled by AWS Cognito and the app relies on AWS Lambda and DynamoDB to manage and deliver assets for the app.
