import React from 'react';
import './App.css';
import './components/DayComponent.tsx'
import DayComponent from './components/DayComponent';
import FormComponent from './components/formComponent'

interface iAmAppProps {
  country: string;
  city: string;
  onChange: any;
}

interface iAmAppState {
  country: string;
  city: string;
}

class App extends React.Component<iAmAppProps, iAmAppState> {
  constructor(props:any) {
    super(props)
    
  }
  
  render() {
    return (
      <div className="App">
        <p>
          <FormComponent />
        </p>
        Check your weather
        
        <p className="informations">
          <DayComponent />
        </p>
      </div>
    );
  }
}

export default App;
