import {
  IonPage,
  IonImg,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonText,
} from "@ionic/react";
import { ellipsisVerticalOutline, personCircleOutline } from "ionicons/icons";
import "./VideoContainer.css";

interface ContainerProps {
  name: string;
  image: any;
  title: string;
  subtitle: string;
}

const VideoContainer: React.FC<ContainerProps> = ({
  name,
  image,
  title,
  subtitle,
}) => {
  return (
    <IonGrid style={{ marginTop: "3%" }}>
      <IonRow>
        <IonCol size-xs="12">
          <IonImg src={image} alt="Mi imagen" />
        </IonCol>
        <IonCol size-xs="2" className="icon-column">
          <IonIcon
            className="avatar-icon"
            aria-hidden="true"
            icon={personCircleOutline}
          />
        </IonCol>
        <IonCol size-xs="9">
        <div className="text-container">

          <IonText> {title}</IonText>
          <IonText style={{ fontSize: '12px', color: 'gray' }}> {subtitle}</IonText>  
          </div>      
          </IonCol>
        <IonCol size-xs="1" className="icon-column">
          <IonIcon aria-hidden="true" icon={ellipsisVerticalOutline} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default VideoContainer;
