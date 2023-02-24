import { FunctionComponent } from "react";
import { IonButton, IonIcon, IonText } from "@ionic/react";
import { reload } from "ionicons/icons";

interface ContainerProps {
  name: string;
  author?: string;
  onClick?: () => void;
  buttonLabel?: string;
  isLoading?: boolean;
}

export const ExploreContainer: FunctionComponent<ContainerProps> = ({
  name,
  author,
  onClick,
  buttonLabel,
  isLoading,
}) => {
  return (
    <div
      style={{
        display: "flex",
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
        }}
      >
        {!isLoading && (
          <div>
            <IonText
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "20px",
              }}
            >
              {name}
            </IonText>
            {author && (
              <IonText
                style={{
                  width: "390px",
                  textAlign: "center",
                  color: "black",
                  fontSize: "15px",
                  whiteSpace: "pre-line",
                }}
              >
                {`   \n\n - ${author}`}
              </IonText>
            )}
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
