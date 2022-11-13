import "./App.css";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import SliceItem from "./components/SliceItem";
import PieItem from "./components/PieItem";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

setupIonicReact();

function App({ signOut, user }) {
  const [allPies, setAllPies] = useState([]);
  const [allSlices, setAllSlices] = useState([]);

  const userId = user.attributes.sub;

  // useEffect(() => {
  //   const dataFetch = [DynamoAPI.grabPies(), DynamoAPI.grabSlices()];
  //   Promise.all(dataFetch).then((result) => {
  //     setAllPies(result[0]);
  //     setAllSlices(result[1]);
  //   });
  // }, []);

  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonRouterOutlet animation={pageTransition}> page transition version */}
        <IonRouterOutlet>
          <Route path="/">
            <Home userId={userId} />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
      {/* <div className="App"> */}
      {/* <main>
        {allPies.map((pie) => (
          <PieItem key={pie.id} pie={pie} />
        ))}
        {allSlices
          .filter((slice) => allPies[0].slices.includes(slice.id))
          .map((slice) => (
            <SliceItem key={slice.id} slice={slice} />
          ))}
        <button onClick={() => DynamoAPI.grabUser(userId)}>User</button>
        <button onClick={() => console.log("pies:", allPies)}>Pie</button>
        <button onClick={DynamoAPI.grabSlice}>Slice</button>
        <button onClick={signOut}>SIGN OUT</button>
      </main> */}
      <h1>TEST</h1>
      {/* </div> */}
    </IonApp>
  );
}

export default withAuthenticator(App);
