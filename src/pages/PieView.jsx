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
import JoystickPie from "../components/JoystickPie";
import * as DynamoAPI from "../utils/ApiQueries";
import ActivePieHeader from "../components/ActivePieHeader";
// import * as queries from "../graphql/queries";

const config = { mass: 7, tension: 5000, friction: 200 };

Amplify.configure(awsExports);

const PieView = ({
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
  playSelected,
  setPlaySelected,
  currentPath,
  setCurrentPath,
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
            <ActivePieHeader activePie={activePie} allPies={allPies} />
            {trail.map(({ x, ...otherProps }, i) => (
              <animated.div
                className="inliner-pie"
                key={allSlices[i].id}
                style={{
                  ...otherProps,
                  transform: x.to((x) => `translate3d(${x}px, 0, 0)`),
                }}
              >
                <SliceItem
                  key={allSlices[i].id}
                  slice={allSlices[i]}
                  allSlices={allSlices}
                  setActiveSlice={setActiveSlice}
                  activeSlice={activeSlice}
                  activePie={activePie}
                  selected={selected}
                  playSelected={playSelected}
                  currentPath={currentPath}
                  setCurrentPath={setCurrentPath}
                />
              </animated.div>
            ))}
            <div id="chest">
              <JoystickPie
                selected={selected}
                setSelected={setSelected}
                joystickState={joystickState}
                setJoystickState={setJoystickState}
                setActiveSlice={setActiveSlice}
                activeSlice={activeSlice}
                playSelected={playSelected}
                setPlaySelected={setPlaySelected}
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

export default PieView;
