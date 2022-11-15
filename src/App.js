import "./App.css";

import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonPage,
  IonHeader,
} from "@ionic/react";
import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";

import SliceItem from "./components/SliceItem";
import PieItem from "./components/PieItem";
import Header from "./components/Header";
import * as DynamoAPI from "./utils/ApiQueries";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import PieView from "./pages/PieView";

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
  const [activePie, setActivePie] = useState({});
  const [allPies, setAllPies] = useState([]);
  const [allSlices, setAllSlices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const dataFetch = [DynamoAPI.grabPies(), DynamoAPI.grabSlices()];
    setIsLoading(true);
    Promise.all(dataFetch)
      .then((result) => {
        setAllPies(result[0]);
        setAllSlices(result[1]);
      })
      .then((result) => setIsLoading(false));
  }, []);

  const userName =
    String(user.username).charAt(0).toUpperCase() +
    String(user.username).slice(1, -1);

  const userId = user.attributes.sub;

  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonRouterOutlet animation={pageTransition}> page transition version */}
        <IonRouterOutlet>
          <Route path="/" exact>
            <Home
              userId={userId}
              activePie={activePie}
              setActivePie={setActivePie}
              allPies={allPies}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/pie-view">
            <PieView allSlices={allSlices} allPies={allPies} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
      <IonHeader class="ion-no-border">
        <div id="header">
          <Header userName={userName} />
        </div>
      </IonHeader>
    </IonApp>
  );
}

export default withAuthenticator(App);
