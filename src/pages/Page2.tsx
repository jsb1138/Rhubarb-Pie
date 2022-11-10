import "../App.css";
import { IonButton, IonPage } from '@ionic/react';
import React from 'react'

const Page2: React.FC = () => {
  return (
    <IonPage>
      <div id="page2">
        <IonButton routerLink='/'>RETURN HOME</IonButton>
      </div>
    </IonPage>
  )
}

export default Page2

