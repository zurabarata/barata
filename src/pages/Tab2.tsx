import { IonContent, IonPage } from "@ionic/react";
import { ExploreContainer } from "../components/ExploreContainer";
import { useFetchRandomQuotes } from "../hooks/useFetchRandomQuotes";

const Tab2: React.FC = () => {
  const { isLoading, refetchQuote, quoteWithAuthor } = useFetchRandomQuotes();

  return (
    <IonPage>
      <IonContent fullscreen>
        {/*        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>*/}
        <ExploreContainer
          name={quoteWithAuthor}
          onClick={() => {
            refetchQuote();
          }}
          buttonLabel="refetch quote"
          isLoading={isLoading}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
