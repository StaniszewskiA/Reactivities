import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities")
      .then(response => {
        if (!response) console.log("Pusty");
        console.log(response);
        setActivities(response.data);
      }).catch(e => console.log(e));
  }, [])
  
  return (
    <div className="App">
        <Header as='h2' icon='users' content='Reactivites'/>
          <List>
            {activities.map((activity: any)=> (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))}
          </List>
    </div>
  );
}

export default App;
