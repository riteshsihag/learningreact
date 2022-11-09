import { Component } from 'react';

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
     <>
     <input type={'text'} value={searchValue} onChange={onChangeSearchValue}/>
     </>
    );
  }
}

export default Search;
