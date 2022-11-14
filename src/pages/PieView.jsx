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
      {/* {allSlices
          .filter((slice) => allPies[0].slices.includes(slice.id))
          .map((slice) => (
            <SliceItem key={slice.id} slice={slice} />
          ))} */}
      <div id="page1">
        <IonButton routerLink='/'>PIE VIEW RETURN HOME</IonButton>
      </div>
      {/* </div> */}
    </IonPage>
  )
}

export default Page1
