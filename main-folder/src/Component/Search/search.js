import { Component } from 'react';

class Search extends Component {
  state={
    searchValue: ''
  }
  onChangeSearchValue=(event)=>{
    this.setState({searchValue: event.target.value})
  }
  render() {
    const {searchValue} = this.state
    const {changeSearchValue} = this.props
    
    return (
     <>
     <input type={'text'} value={searchValue} onChange={this.onChangeSearchValue}/>
     </>
    );
  }
}

export default Search;
