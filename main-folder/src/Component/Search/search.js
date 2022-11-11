import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import './search.css'
import ReactContext from '../../Context/reactContext';

class Search extends Component {
  state={
    searchValue: ''
  }
  
  render() {
    const {searchValue} = this.state
    const {changeSearchValue} = this.props
    const changeSearch=()=>{
        changeSearchValue(searchValue)
    }
    const onChangeSearchValue=(event)=>{
        this.setState({searchValue: event.target.value}, changeSearch)
      }

    return (
      <ReactContext.Consumer>
      {value=>{
        const {isDarkModeOn} = value
        return(
     <div className='search-container' >
        <input className={isDarkModeOn?'dark-mode-container':'search-input'} type={'text'} value={searchValue} placeholder={'Search'} onChange={onChangeSearchValue}/>
        <div className={isDarkModeOn?'dark-mode':'search'}>
        <BsSearch style={{color: `${isDarkModeOn?'white':'black'}`}}/>
        </div>
     </div>
      )
    }}
 </ReactContext.Consumer>
    );
  }
}

export default Search;
