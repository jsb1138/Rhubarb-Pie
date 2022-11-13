import "../App.css";
import { IonButton, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react'

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

import SliceItem from "../components/SliceItem";
import PieItem from "../components/PieItem";
import * as DynamoAPI from "../utils/ApiQueries";
// import * as queries from "../graphql/queries";



Amplify.configure(awsExports);

const Home = ({ signOut, userId }) => {

  const [allPies, setAllPies] = useState([]);
  const [allSlices, setAllSlices] = useState([]);

  useEffect(() => {
    const dataFetch = [DynamoAPI.grabPies(), DynamoAPI.grabSlices()];
    Promise.all(dataFetch).then((result) => {
      setAllPies(result[0]);
      setAllSlices(result[1]);
    });
  }, []);

  return (
    <IonPage>
      {/* <div className="App"> */}
      <main>
        {/* {allPies.map((pie) => (
          <PieItem key={pie.id} pie={pie} />
        ))} */}
        {/* {allSlices
          .filter((slice) => allPies[0].slices.includes(slice.id))
          .map((slice) => (
            <SliceItem key={slice.id} slice={slice} />
          ))} */}
        <button onClick={() => DynamoAPI.grabUser(userId)}>User</button>
        <button onClick={() => console.log("pies:", allPies)}>Pie</button>
        <button onClick={DynamoAPI.grabSlice}>Slice</button>
        <button onClick={signOut}>SIGN OUT</button>
      </main>
      {/* </div> */}
    </IonPage>
  )
}

export default Home


// import "./App.css";

// import { IonApp } from "@ionic/react";

// import { withAuthenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// import { useState, useEffect } from "react";
// import SliceItem from "./components/SliceItem";
// import PieItem from "./components/PieItem";
// import * as DynamoAPI from "./utils/ApiQueries";

// function App({ signOut, user }) {
//   const [allPies, setAllPies] = useState([]);
//   const [allSlices, setAllSlices] = useState([]);

//   const userId = user.attributes.sub;

//   useEffect(() => {
//     const dataFetch = [DynamoAPI.grabPies(), DynamoAPI.grabSlices()];
//     Promise.all(dataFetch).then((result) => {
//       setAllPies(result[0]);
//       setAllSlices(result[1]);
//     });
//   }, []);

//   return (
//     <IonApp>
//       {/* <div className="App"> */}
//       <main>
//         {allPies.map((pie) => (
//           <PieItem key={pie.id} pie={pie} />
//         ))}
//         {/* {allSlices
//           .filter((slice) => allPies[0].slices.includes(slice.id))
//           .map((slice) => (
//             <SliceItem key={slice.id} slice={slice} />
//           ))} */}
//         <button onClick={() => DynamoAPI.grabUser(userId)}>User</button>
//         <button onClick={() => console.log("pies:", allPies)}>Pie</button>
//         <button onClick={DynamoAPI.grabSlice}>Slice</button>
//         <button onClick={signOut}>SIGN OUT</button>
//       </main>
//       {/* </div> */}
//     </IonApp>
//   );
// }

// export default withAuthenticator(App);
