import './App.css';
import { Component } from 'react';
import Display from './Component/displayStatus';
import DisplayAll from './Component/displayAll';
const status = {
  initial:'initial',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  notRegistered: 'YET_TO_REGISTER'
}
class App extends Component {
  state = {
    registrationStatus: status.initial
}

displayView = (registration) => {
    if (registration === status.registered) {
        this.setState({ registrationStatus: status.registered })
       
    }
    if (registration === status.registrationClosed) {
        this.setState({ registrationStatus: status.registrationClosed })

    }
    if (registration === status.notRegistered) {
        this.setState({ registrationStatus: status.notRegistered })

    }
}
  render() {
    const {registrationStatus} = this.state
    return(

      <div className='main-container'>
        <DisplayAll displayView={this.displayView} registrationStatus={registrationStatus}/>
        <Display registrationStatus={registrationStatus}/>
      </div>
    )
  }
}

export default App;
