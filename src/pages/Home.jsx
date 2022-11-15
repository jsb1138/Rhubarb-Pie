import "../App.css";
import { IonButton, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { useTrail, animated } from "react-spring";

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

import SliceItem from "../components/SliceItem";
import PieItem from "../components/PieItem";
import Header from "../components/Header";
import Joystick from "../components/Joystick";
import * as DynamoAPI from "../utils/ApiQueries";
// import * as queries from "../graphql/queries";

const config = { mass: 7, tension: 5000, friction: 200 };

Amplify.configure(awsExports);

const Home = ({ signOut, userId, activePie, setActivePie, allPies, currentUser }) => {
  const [state, setState] = useState(true);
  const trail = useTrail(allPies.length, {
    config,
    from: { opacity: 0, x: 10 },
    to: { opacity: state ? 1 : 0, x: state ? 0 : 0 }
  });
  return (
    <IonPage>
      <main>
      {/* <Header currentUser={currentUser}/> */}
        {/* {allPies.sort((x,y) => x.id - y.id).map((pie) => (
          <PieItem key={pie.id} pie={pie} allPies={allPies} setActivePie={setActivePie} activePie={activePie}/>
        ))} */}
        {trail.map(({ x, ...otherProps }, i) => (
        <animated.div
          className="inliner"
          key={allPies[i].id}
          style={{
            ...otherProps,
            transform: x.to(x => `translate3d(${x}px, 0, 0)`)
          }}
        >
          <PieItem key={allPies[i].id} pie={allPies[i]} allPies={allPies} setActivePie={setActivePie} activePie={activePie}/>
        </animated.div>
      ))}
        <div id="chest">
          <Joystick />
        </div>
      </main>
    </IonPage>
  )
}

export default Home
