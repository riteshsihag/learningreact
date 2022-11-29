import { Component } from 'react';
import './home.css'
import {Link} from 'react-router-dom'
import {withTranslation} from 'react-i18next'
import LanguageDropdown from '../../Components/LanguageChanger/languageDropdown';
import Navbar from '../../Components/NavBar/navbar';
import { propsType } from '../../Stores/types';
class Home extends Component<propsType> {
 
  render() {

    return (
     <>
     <Navbar/>
     <div className='home'>
      <div className='home-content'>
      <h1>{this.props.t('mainPageHeading')}</h1>
      <p>{this.props.t('mainPageDescription')}</p>
      <button><Link to={'/jobs'}>{this.props.t('mainPageButton')}</Link></button>
      </div>
      <LanguageDropdown/>
     </div>
     </>
    )
  }
}
export default withTranslation()(Home);