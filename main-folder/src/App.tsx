import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import home from './Common/Routes/HomePage/home';
import login from './Common/Routes/LoginPage/login';
import Details from './Jobs/Routes/JobDetails/details';
import NotFound from './Common/Routes/NotFound/notfound';
import ProtectedRoute from './Common/Routes/ProtectedRoute/protectedRoute';
import JobRoute from './Jobs/Routes/JobRoute/jobRoute';
import { Provider } from 'mobx-react';
import jobRouteStore from './Jobs/Stores/JobRouteStore/jobRouteStore';
import { JobDetailService, JobService } from './Jobs/Services/index.api';
import detailStore from './Jobs/Stores/JobDetailStore/jobDetailStore';
import { DetailFixtureData, JobFixtureData } from './Jobs/Services/index.fixture';
import { LoginServiceApi } from './Common/Services/index.api';
import loginStore from './Common/Stores/LoginStore/loginStore';
import { LoginFixture } from './Common/Services/index.fixture';
import { ProfileServiceApi } from './UserProfile/Services/index.api';
import profileStore from './UserProfile/Stores/ProfileStore/profileStore';
import { ProfileFixture } from './UserProfile/Services/index.fixture';

class App extends Component {
  
  render() {
    const jobService = new JobService()
   const jobFixtureData = new JobFixtureData()
   const JobRouteValues = new jobRouteStore(jobService,jobFixtureData)
   const jobDetailService = new JobDetailService()
   const detailFixtureData = new DetailFixtureData()
   const DetailsStore = new detailStore(jobDetailService,detailFixtureData)
   const LoginServiceData = new LoginServiceApi()
   const LoginFixtureData = new LoginFixture()
   const LoginValues = new loginStore(LoginServiceData,LoginFixtureData)
   const ProfileServiceData = new ProfileServiceApi()
   const ProfileFixtureData = new ProfileFixture()
   const ProfileValues = new profileStore(ProfileServiceData,ProfileFixtureData)
  
    return (
      <Provider JobRouteValues={JobRouteValues} DetailsStore={DetailsStore} LoginValues={LoginValues} ProfileValues={ProfileValues}>
      <BrowserRouter>
      <Switch>
      <Route exact path="/login" component={login}/>
      <ProtectedRoute exact path="/" component={home}/>
      <ProtectedRoute exact path="/jobs" component={JobRoute}/>
      <ProtectedRoute exact path="/jobs/:id" component={Details}/>
      <ProtectedRoute path='*' component={NotFound}/>
      </Switch>
      </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
