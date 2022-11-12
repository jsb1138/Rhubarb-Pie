import logo from "./logo.svg";
import "./App.css";

import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { listSlices } from "./graphql/queries";

const getUsers = async () => {
  try {
    console.log("YES");
    const res = await API.graphql(graphqlOperation(listSlices));
    const data = res.data.listSlices.items[0].path;
    console.log("slices: ", data);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};

function App({ signOut }) {
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
      <button onClick={getUsers}>listUsers</button>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
}

export default withAuthenticator(App);
