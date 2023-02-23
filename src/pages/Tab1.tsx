import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {ExploreContainer} from "../components/ExploreContainer"

const Tab1: React.FC = () => {
  return (
    <IonPage >
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="The time is now" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
