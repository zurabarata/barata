import {FunctionComponent} from "react";
import {IonText} from "@ionic/react";

interface ContainerProps {
  name: string;
}

export const ExploreContainer: FunctionComponent<ContainerProps> = ({ name }) => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#f0d722",
    }}>
        <div style={{
                width: "100%",
                maxWidth: "400px",
                height: "100%",
                maxHeight: "800px",
            }}>
        {/*<IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
        </IonCard>*/}
            <IonText>
                <h1 style={{
                    textAlign: "center",
                    color: "black",
                }}

                >{name}</h1>
            </IonText>
        </div>
    </div>
  );
};
