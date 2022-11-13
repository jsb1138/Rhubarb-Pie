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

const Page1 = ({ signOut, userId }) => {

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
      <div id="page1">
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

        <IonButton routerLink='/'>RETURN HOME</IonButton>
      </div>
      {/* </div> */}
    </IonPage>
  )
}

export default Page1
