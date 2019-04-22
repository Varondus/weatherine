import * as React from 'react'

interface iAmProps {
    country?: string;
    city?: string;
}

interface iAmState {
    country?: string;
    city?: string;
    temp?: number;
}

class FormComponent extends React.Component<iAmProps,iAmState> {
    constructor(props: any) {
        super(props)
        this.inputCountry = this.inputCountry.bind(this);
        this.inputCity = this.inputCity.bind(this)
    }

    inputCountry(e: React.ChangeEvent<HTMLInputElement>) {
        const {value = ''} = e.target;
        const isLegal = value.match(/([A-Za-z])*/)
        if (isLegal && isLegal[0] === isLegal.input) {
          this.setState({country: value}) }
      }
    
      inputCity(e: React.ChangeEvent<HTMLInputElement>) {
        const {value = ''} = e.target;
          this.setState({city: value})
      }
    
      getWeather = async (e: any) => {
        e.preventDefault();
        const apiKey = 'c59207d09fe50d2d951f19574e5a7339';
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${apiKey}`);
        
        const response = await api_call.json();
        
        console.log(response);
        this.setState({temp: response.main.temp})
        
      }

  render() {
    return (
      <div>
        <form onSubmit={this.getWeather}>
          Country:
          <input value={this.props.country} onChange={this.inputCountry}/>
          City:
          <input value={this.props.city} onChange={this.inputCity}/>
          <button>Submit</button>
        </form>
    </div>
    );
  }
}


export default FormComponent;