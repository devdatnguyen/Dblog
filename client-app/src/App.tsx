import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5298/api/activities')
    .then(respone => {
      console.log(respone);
      setActivities(respone.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivites'/>
      <List>
        {activities.map((activiti: any) =>(
          <List.Item key={activiti.id}>
            {activiti.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
