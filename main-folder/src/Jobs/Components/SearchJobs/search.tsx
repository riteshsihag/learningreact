import { Component } from 'react';
import DisplayJob from '../DisplayJobs/displayJobs';
import {AiOutlineSearch} from 'react-icons/ai'
import React from 'react';
import { eachJobType, SearchType } from '../../Stores/type';


class Search extends Component<SearchType> {
state={
    searchValue:''
}
onChangeSearchValue=(event:React.ChangeEvent<HTMLInputElement>)=>[
  this.setState({searchValue: event.target.value})
]
    render() {
        const { allJobs  } = this.props
        const {searchValue} = this.state
        const displaySearchItem = allJobs.filter((eachJob: eachJobType)=>{
            if(eachJob.title.toLowerCase().includes(searchValue.toLowerCase())){
                return eachJob
            }
        })
        
        return (
            <>
            <div className='main-search-container'>
                <div className='search'>
             <div className='search-container'>
            <input placeholder='Search' type={'text'} value={searchValue} onChange={this.onChangeSearchValue} />
            <div className='search-btn'>
            <AiOutlineSearch/>
            </div>
            </div>

            </div>
            <div className='display-job'>
             <DisplayJob displaySearchItem={displaySearchItem}/>
             </div>
            </div>
            </>
        );
    }
}

export default Search;
