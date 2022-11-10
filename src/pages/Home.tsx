import "../App.css";
import { IonButton, IonPage } from '@ionic/react';
import React from 'react'

import { Amplify } from 'aws-amplify';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const Home: React.FC = () => {
  return (
    <IonPage>
      <main>
        <IonButton routerLink='/page1'>PAGE 1</IonButton>
        <IonButton routerLink='/page2'>PAGE 2</IonButton>
      </main>
    </IonPage>
  )
}

export default Home

