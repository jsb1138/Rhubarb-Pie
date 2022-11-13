import logo from "./logo.svg";
import "./App.css";

import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getPie, getSlice } from "./graphql/queries";
import * as queries from "./graphql/queries";

const grabUser = async (userId) => {
  try {
    console.log("this is the user favorite:", userId.favorites);
    // const res = await API.graphql(graphqlOperation(getUser, { id: user }));
    const res = await API.graphql({
      query: queries.listUsers,
      // variables: { id: userId },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    const data = res.data;
    console.log("user: ", data);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};

const grabPie = async () => {
  try {
    const res = await API.graphql(
      graphqlOperation(getPie, { id: "01_launch_2022" })
    );
    const data = res.data;
    console.log("pie: ", data);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};

const grabSlice = async () => {
  try {
    const res = await API.graphql(graphqlOperation(getSlice, { id: "1R_1" }));
    const data = res.data;
    console.log("slices: ", data);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};

function App({ signOut, user }) {
  console.log("USER-->", user);
  console.log("USER SUB-->", user.attributes.sub);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => grabUser(user.attributes.sub)}>User</button>
      <button onClick={grabPie}>Pie</button>
      <button onClick={grabSlice}>Slice</button>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
}

export default withAuthenticator(App);
