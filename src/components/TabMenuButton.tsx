import { IonIcon, IonTabButton } from "@ionic/react";
import { FunctionComponent } from "react";

export interface TabMenuButtonProps {
  tab: string;
  href: string;
  icon: string;
}

export const TabMenuButton: FunctionComponent<TabMenuButtonProps> = ({
  tab,
  href,
  icon,
}) => {
  return (
    <IonTabButton
      tab={tab}
      href={href}
      style={{
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
        borderTop: "none",
        borderLeft: "none",
        borderBottom: "none",
      }}
    >
      <IonIcon aria-hidden="true" icon={icon} />
    </IonTabButton>
  );
};
