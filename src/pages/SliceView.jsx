import "../App.css";
import { IonButton, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";

import { useTrail, animated } from "react-spring";

import SliceItem from "../components/SliceItem";
import PieItem from "../components/PieItem";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import JoystickSlice from "../components/JoystickSlice";
import * as DynamoAPI from "../utils/ApiQueries";
import ActiveSliceHeader from "../components/ActiveSliceHeader";
import Player from "../components/Player";
// import * as queries from "../graphql/queries";

const config = { mass: 7, tension: 5000, friction: 200 };

Amplify.configure(awsExports);

const SliceView = ({
  activeSlice,
  setActiveSlice,
  activePie,
  setActivePie,
  allPies,
  allSlices,
  isLoading,
  stageHome,
  setStageHome,
  stagePie,
  setStagePie,
  selected,
  setSelected,
  joystickState,
  setJoystickState,
}) => {
  const [state, setState] = useState(true);
  const trail = useTrail(allSlices.length, {
    config,
    from: { opacity: 0, x: 10 },
    to: { opacity: state ? 1 : 0, x: state ? 0 : 0 },
  });

  // useEffect(() => {
  //   setStageHome(false);
  //   setStagePie(true);
  // }, []);

  return (
    <>
      {!isLoading ? (
        <IonPage>
          <main>
            <ActiveSliceHeader activePie={activePie} allPies={allPies} />
            <Player />
            <div id="chest">
              <JoystickSlice
                selected={selected}
                setSelected={setSelected}
                joystickState={joystickState}
                setJoystickState={setJoystickState}
                setActiveSlice={setActiveSlice}
                activeSlice={activeSlice}
              />
            </div>
          </main>
        </IonPage>
      ) : (
        <IonPage>
          <main>
            <Spinner />
          </main>
        </IonPage>
      )}
    </>
  );
};

export default SliceView;
