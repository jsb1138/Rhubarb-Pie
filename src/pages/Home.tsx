import "../App.css";
import { IonApp, IonButton, IonPage, setupIonicReact } from '@ionic/react';
import React from 'react'

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

