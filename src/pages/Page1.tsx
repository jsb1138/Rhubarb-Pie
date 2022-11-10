import "../App.css";
import { IonButton, IonPage } from '@ionic/react';
import React from 'react'

const Page1: React.FC = () => {
  return (
    <IonPage>
      <div id="page1">
        <IonButton routerLink='/'>RETURN HOME</IonButton>
        <IonButton >STREAM AUDIO</IonButton>
      </div>
    </IonPage>
  )
}

export default Page1

