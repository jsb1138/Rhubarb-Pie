import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
// const appConfig = {
//   aws_appsync_graphqlEndpoint:
//     "https://4tbwz5z2ird7rezxgv3x5v4nea.appsync-api.eu-central-1.amazonaws.com/graphql",
//   aws_appsync_region: "eu-central-1",
//   aws_appsync_authenticationType: "API_KEY",
//   aws_appsync_apiKey: "da2-6wyhcorr4fbo3na5gbp4yxks24",
// };
// Amplify.configure(appConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
