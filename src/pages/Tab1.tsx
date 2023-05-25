import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { notificationsOutline, personCircleOutline, searchOutline, tvOutline } from 'ionicons/icons';
import VideoContainer from '../components/VideoContainer';
import video1 from '../assets/video1.png'; // Ruta relativa a la imagen
import video2 from '../assets/video2.png'; // Ruta relativa a la imagen
import video3 from '../assets/video3.png'; // Ruta relativa a la imagen
import { useState, useEffect } from 'react';

const Tab1: React.FC = () => {
  const [segments, setSegments] = useState<any[]>([]);

  useEffect(() => {
    const segmentTitles = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Computer program',
      'Documentary',
      'Music',
    ];
    const updatedSegments = segmentTitles.map((val) => ({
      title: val,
      selected: false,
    }));
    setSegments(updatedSegments);

  }, []);


  const selectSegment = (index: any) => {
    const updatedSegments = segments.map((item, i) => ({
      ...item,
      selected: i === index,
    }));
    setSegments(updatedSegments);
  };
  return (
    <IonPage>
       <IonHeader collapse="condense">
          <IonToolbar>
          <IonGrid>
          <IonRow>
          <IonCol size-xs="6" size-sm="6" size-md="4" size-lg="3">
     
          <IonImg         
          className='img'

          src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
          alt="Yotube">
            
          </IonImg>
        </IonCol>

        <IonCol size-xs="6" size-sm="6" size-md="4" size-lg="3">
        <div className="ion-justify-content-around">

        <IonIcon aria-hidden="true" icon={tvOutline} />
        <IonIcon aria-hidden="true" icon={notificationsOutline} />
        <IonIcon aria-hidden="true" icon={searchOutline} />
        <IonIcon aria-hidden="true" icon={personCircleOutline} />
</div>
            
        </IonCol>
        </IonRow>
        </IonGrid>
          </IonToolbar>
          <IonToolbar color="light">
        <div className="button-bar">
          {segments.map((seg, i) => (
            <IonButton
            
              key={i}
              size="small"
              shape="round"
              className={seg.selected ? 'activated' : 'inactive   color'}
              onClick={() => selectSegment(i)}
            >
              {seg.title}
            </IonButton>
          ))}
        </div>
      </IonToolbar>
        </IonHeader>
      <IonContent >
        <VideoContainer name="Tab 1 page" image={video1} title='Animate on scroll || Website Scrolling Animation || HTML, CSS and JS #aos #animation #scrolling'subtitle='Ocean of Code . 10k visualizations. 2 years ago' />
        <VideoContainer name="Tab 1 page" image={video2}title='Top 27 Elementor Hidden Features | Elementor Tips and Tricks'subtitle='Make Dream Website . 157k visualizations. 1 year ago' />
        <VideoContainer name="Tab 1 page" image={video3}title='What’s the best cross-platform technology in 2023?!?!'subtitle='Simon Grimm . 500 visualizations. 5 minutes ago' />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
