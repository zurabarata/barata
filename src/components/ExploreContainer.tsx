import { FunctionComponent } from "react";
import { IonButton, IonText } from "@ionic/react";

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
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {!isLoading && (
            <div>
              <IonText
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: "25px",
                }}
              >
                {name}
              </IonText>
              {author && (
                <IonText
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontSize: "20px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {`   \n\n - ${author}`}
                </IonText>
              )}
            </div>
          )}

          {buttonLabel && (
            <IonButton onClick={onClick}>{buttonLabel}</IonButton>
          )}
        </div>
      </div>
    </div>
  );
};
