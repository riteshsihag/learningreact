import { Component } from 'react';
import '../DisplayJobs/displayjobs.css'
import DisplayJob from '../DisplayJobs/displayJobs';
import {AiOutlineSearch} from 'react-icons/ai'

class Search extends Component {
state={
    searchValue:''
}
onChangeSearchValue=(event)=>[
  this.setState({searchValue: event.target.value})
]
    render() {
        const { allJobs, changeSearchValue } = this.props
        const {searchValue} = this.state
        const onChangeSearchValue = (event) =>{
            this.setState({searchValue: event.target.value})
            changeSearchValue(searchValue)
        }
        const displaySearchItem = allJobs
        
        return (
            <>
            <div className='main-search-container'>
             <div className='search-container'>
            <input placeholder='Search' type={'text'} value={searchValue} onChange={onChangeSearchValue} />
            <div className='search-btn'>
            <AiOutlineSearch/>
            </div>
            </div>
             <DisplayJob displaySearchItem={displaySearchItem}/>
            </div>
            </>
        );
    }
}

export default Search;
