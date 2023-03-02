import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data);
      })
  }, [])
  
  return (
    <div className = "App">
      <React.Component Header></React.Component>
        <React.Component List>
          {activities.map((activity: any ) => {
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          })}
        </React.Component>
    </div>
  );
}

export default App;
