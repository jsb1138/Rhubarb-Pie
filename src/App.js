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

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

function App({ signOut, user }) {
  const userId = user.attributes.sub;

  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonRouterOutlet animation={pageTransition}> page transition version */}
        <IonRouterOutlet>
          <Route path="/" exact>
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
      {/* </div> */}
    </IonApp>
  );
}

export default withAuthenticator(App);
