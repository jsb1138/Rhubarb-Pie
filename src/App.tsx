import { IonApp, IonButton, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { Route } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'

import {
  withAuthenticator
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
// import pageTransition from './helpers/page-transitions';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = ({ signOut, user }: any) => (
  <IonApp>
    <IonReactRouter>
      {/* <IonRouterOutlet animation={pageTransition}> page transition version */}
      <IonRouterOutlet>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/page1'>
          <Page1 />
        </Route>
        <Route path='/page2'>
          <Page2 />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    .
    {/* <AmplifySignOut /> */}
    <IonButton onClick={signOut}>SIGN OUT</IonButton>
  </IonApp>
);

export default withAuthenticator(App);
