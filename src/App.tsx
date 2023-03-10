import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { beer, chatbubble, football, logoGithub } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar
          slot="bottom"
          style={{
            backgroundColor: "white",
          }}
        >
          <IonTabButton
            tab="tab1"
            href="/tab1"
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "black",
              borderTop: "none",
              borderBottom: "none",
            }}
          >
            <IonIcon aria-hidden="true" icon={beer} />
          </IonTabButton>
          <IonTabButton
            tab="tab2"
            href="/tab2"
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
            <IonIcon aria-hidden="true" icon={chatbubble} />
          </IonTabButton>
          <IonTabButton
            tab="tab3"
            href="/tab3"
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
            <IonIcon aria-hidden="true" icon={logoGithub} />
          </IonTabButton>
          <IonTabButton
            tab="tab4"
            href="/tab4"
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
            <IonIcon aria-hidden="true" icon={football} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
