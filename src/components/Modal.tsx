import React, { useRef } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonIcon,
  IonSearchbar,
  IonButtons,
} from '@ionic/react';
import { addCircleOutline, closeOutline, cloudUploadOutline, createOutline, radioOutline, videocamOutline } from 'ionicons/icons';
import "./Modal.css";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    const modal = useRef<HTMLIonModalElement>(null);

  return (
      <IonModal isOpen={true} onDidDismiss={closeModal} ref={modal}  initialBreakpoint={0.50} breakpoints={[0, 0.25, 0.5, 0.75]}>
        <IonToolbar>
          <IonTitle>Create</IonTitle>
          <IonButtons slot="end">
        <IonButton onClick={closeModal}>
        <IonIcon
            className="avatar-icon"
            aria-hidden="true"
            icon={closeOutline}
          />
        </IonButton>
      </IonButtons>
        </IonToolbar>
          <IonContent className="ion-padding">
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                <IonIcon
            aria-hidden="true"
            icon={videocamOutline}
          />
                </IonAvatar>
                <IonLabel>
                  <h1>Create a short</h1>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                <IonIcon
            aria-hidden="true"
            icon={cloudUploadOutline}
          />
                </IonAvatar>
                <IonLabel>
                <h1>Upload a video</h1>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                <IonIcon
            aria-hidden="true"
            icon={radioOutline}
          />
                </IonAvatar>
                <IonLabel>
                <h1>Go live</h1>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                <IonIcon
            aria-hidden="true"
            icon={addCircleOutline}
          />
                </IonAvatar>
                <IonLabel>
                <h1>Add to your story</h1>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                <IonIcon
            aria-hidden="true"
            icon={createOutline}
          />
                </IonAvatar>
                <IonLabel>
                <h1>Create a post</h1>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>
  );
};

export default Modal;
