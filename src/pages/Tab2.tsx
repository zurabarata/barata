import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {ExploreContainer} from "../components/ExploreContainer"
import {useFetchRandomRuotes} from "../hooks/useFetchRandomRuotes";

const Tab2: React.FC = () => {

  const {quoteWithAuthor, isLoading, refetchQuote, author, quote} = useFetchRandomRuotes()

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={quote} onClick={
            () => {
                refetchQuote()
            }
        } author={author} buttonLabel="refetch" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
