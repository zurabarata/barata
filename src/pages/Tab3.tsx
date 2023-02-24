import { IonContent, IonPage } from "@ionic/react";
import { ExploreContainer } from "../components/ExploreContainer";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/*        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>*/}
        <ExploreContainer name="Software development" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
