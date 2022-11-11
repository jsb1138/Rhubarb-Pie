import "../App.css";
import { IonButton, IonPage } from '@ionic/react';
import React from 'react'
import { Storage } from "@aws-amplify/storage"

// Storage.put("test.txt", "Hello");

const Page1: React.FC = () => {
const audio = new Audio('https://solacio-audio153920-dev.s3.eu-central-1.amazonaws.com/protected/Aphex+Twin+-+Rhubarb.mp3')

function playAudio () {
  audio.play();
}

  return (
    <IonPage>
      <div id="page1">
        <IonButton routerLink='/'>RETURN HOME</IonButton>
        <IonButton onClick={playAudio}>STREAM AUDIO</IonButton>
      </div>
    </IonPage>
  )
}

export default Page1

