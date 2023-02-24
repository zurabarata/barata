import { FunctionComponent } from "react";
import { IonButton, IonIcon, IonText } from "@ionic/react";
import { reload } from "ionicons/icons";

interface ContainerProps {
  name: string;
  onClick?: () => void;
  buttonLabel?: string;
  isLoading?: boolean;
}

export const ExploreContainer: FunctionComponent<ContainerProps> = ({
  name,
  onClick,
  buttonLabel,
  isLoading,
}) => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#f0d722",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          height: "400px",
          maxHeight: "800px",
          display: "flex",
        }}
      >
        {!isLoading && (
          <div
            style={{
              // center text
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "5px",
              // center text
            }}
          >
            <IonText
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "20px",
              }}
            >
              {name}
            </IonText>
          </div>
        )}
      </div>
      {buttonLabel && (
        <IonButton color="info" onClick={onClick}>
          <IonIcon aria-hidden="true" icon={reload} />
        </IonButton>
      )}
    </div>
  );
};
