import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import NarBar from './NarBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingConponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(()=>{
      activityStore.loadActivities();
  }, [activityStore])


  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NarBar />
      <Container style={{marginTop:"7em"}}>
        <ActivityDashboard />
         
      </Container>     
    </>
  )
}

export default observer (App);
