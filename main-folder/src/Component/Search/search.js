import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import './search.css'
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
     <div className='search-container'>
        <input className='search-input' type={'text'} value={searchValue} placeholder={'Search'} onChange={onChangeSearchValue}/>
        <div className='search'>
        <BsSearch/>
        </div>
     </div>
    );
  }
}

export default Search;
