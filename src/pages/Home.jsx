import "../App.css";
import { IonButton, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react'

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

import SliceItem from "../components/SliceItem";
import PieItem from "../components/PieItem";
import Header from "../components/Header";
import * as DynamoAPI from "../utils/ApiQueries";
// import * as queries from "../graphql/queries";



Amplify.configure(awsExports);

const Home = ({ signOut, userId }) => {
  
  const [allPies, setAllPies] = useState([]);
  const [allSlices, setAllSlices] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  

  useEffect(() => {
    const dataFetch = [DynamoAPI.grabPies(), DynamoAPI.grabSlices(), DynamoAPI.grabUser()];
    Promise.all(dataFetch).then((result) => {
      setAllPies(result[0]);
      setAllSlices(result[1]);
      setCurrentUser(result[2][0]);
    });
  }, []);

// console.log("new c user",currentUser);
  return (
    <IonPage>
      {/* <div className="App"> */}
      <main>
      <Header currentUser={currentUser}/>
        {allPies.sort((x,y)=> x.id - y.id).map((pie) => (
          <PieItem key={pie.id} pie={pie} allPies={allPies} />
        ))}
        {/* {allSlices
          .filter((slice) => allPies[0].slices.includes(slice.id))
          .map((slice) => (
            <SliceItem key={slice.id} slice={slice} />
          ))} */}
        {/* <button onClick={() => DynamoAPI.grabUser(userId)}>User</button>
        <button onClick={() => console.log("pies:", allPies)}>Pie</button>
        <button onClick={DynamoAPI.grabSlice}>Slice</button>
        <button onClick={signOut}>SIGN OUT</button> */}
        <IonButton routerLink='/page1'>PAGE 1</IonButton>
        <IonButton routerLink='/page2'>PAGE 2</IonButton>
      </main>
      {/* </div> */}
    </IonPage>
  )
}

export default Home
