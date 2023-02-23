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
                maxWidth: "400px",
                height: "400px",
                maxHeight: "800px",
            }}>
            <IonText>
                <h1 style={{
                    textAlign: "center",
                    color: "black",
                    fontSize: "50px",
                }}

                >{name}</h1>
            </IonText>
        </div>
    </div>
  );
};
